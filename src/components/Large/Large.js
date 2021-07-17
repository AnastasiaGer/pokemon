import {API_URL} from '../../const/const.js'
import {getDataApi} from '../../utils/utils.js'
import { ROOT_MODAL } from '../../const/const.js';
import imgCloseWhite from './img/close-white.svg';
import './Large.css'

class Large {
   renderLarge(data) {
    let htmlContent = '';
    data.forEach(({id, name, images: {large}}) => {
      const imgSrcLarge = large;
      
      htmlContent += `
          <li class="characters__item">
              <img class="img-cover characters__img" src="${imgSrcLarge}" />
              <span class="characters__name">${name}</span>
          </li>
      `;
  });

  const htmlWrapper = `
      <div class="wrapper">
          <ul class="characters__container">
              ${htmlContent}
          </ul>
          <button
              class="btn bg-contain characters__close"
              onclick="modal.innerHTML = ''"
              style="background-image: url(${imgCloseWhite})"
          ></button>
      </div>
  `;

  ROOT_MODAL.innerHTML = htmlWrapper;
}

async render(uri) {
  const data = await getDataApi.getData(uri);

  this.renderLarge(data);
}
}

export default new Large();