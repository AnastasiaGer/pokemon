import 'regenerator-runtime/runtime';
import App from './components/App/App.js'
import Card from './components/Card/Card.js'

(async () => {
  await App.render()
  Card.eventListener();
})();