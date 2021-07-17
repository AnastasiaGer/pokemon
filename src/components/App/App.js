import {getDataApi} from '../../utils/utils.js'
import {API_URL} from '../../const/const.js'
import  './App.css'


class App {
  async render() {
    const data = await getDataApi.getData(API_URL);
    console.log(data);

  }
}

export default new App();