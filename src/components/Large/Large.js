import {API_URL} from '../../const/const.js'
import {getDataApi} from '../../utils/utils.js'
import { ROOT_MODAL } from '../../const/const.js';
import imgCloseWhite from './img/close-white.svg';
import './Large.css'

class Large {
   renderLarge(data) {
    let htmlContent = ``;
    data.forEach(({id, name, images: {large}}) => {
      const imgSrcLarge = large;
      
      htmlContent = `
      <div class="wrapper">
        <div class="characters__container">
          <img class="img-cover characters__img" src="${imgSrcLarge}" />
          <span class="characters__name">${name}</span>
      </div>
      <button
          class="btn bg-contain characters__close"
          onclick="modal.innerHTML = ''"
          style="background-image: url(${imgCloseWhite})"
      ></button>
      </div>
      `;
  });

  const html = htmlContent;

  ROOT_MODAL.innerHTML = html;
}

async render(uri) {
  const data = await getDataApi.getData(API_URL);

  this.renderLarge(data);
}
}

export default new Large();