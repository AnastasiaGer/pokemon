import { ROOT_INDEX } from '../../const/const.js';
import './Error.css'

class Error {
  render() {
    const htmlWrapper = `
        <div class="error__container">
            <span>
                <p class="error__alert">Error.</p>
                <p class="error__alert">Try later</p>
            </span>
        </div>
    `;

    ROOT_INDEX.innerHTML = htmlWrapper;
}
}

export default new Error();