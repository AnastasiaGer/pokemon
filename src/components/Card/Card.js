import {getDataApi} from '../../utils/utils.js'
import {API_URL} from '../../const/const.js'
import { ROOT_INDEX} from '../../const/const.js'
import Error from '../Error/Error.js';
import Large from '../Large/Large.js'
import './Card.css'

class Card {
  renderCards(data) {
    let htmlContent ='';

    data.forEach(({id, name, images: {small, large}}) => {
      const imgSrc = small;
      const imgSrcLarge = large;
      htmlContent +=`
      <li class="comics__item" data-large="${imgSrcLarge}">
        <span class="comics__name">${name}</span>
        <img class="comics__img" src=${imgSrc}/>
      </li>
      `
    })

    //console.log(data);
    const htmlWrapper = `<ul class="comics__container">${htmlContent} </ul>`
    ROOT_INDEX.innerHTML = htmlWrapper
  }

  async render() {
    const data = await getDataApi.getData(API_URL);

    data ? this.renderCards(data) : Error.render();
}

  eventListener() {
    document.querySelectorAll('.comics__item').forEach(element => {
        const uri = element.getAttribute('data-large');

        element.addEventListener('click', () => {
            Large.render(API_URL)
        })
    })
}
}

export default new Card();