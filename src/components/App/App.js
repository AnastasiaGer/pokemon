import Card from '../Card/Card.js'
import  './App.css'
class App {
  async render() {
    await Card.render();
  }
}

export default new App();