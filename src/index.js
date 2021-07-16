import axios from 'axios';
import 'regenerator-runtime/runtime';

export const API_URL = 'https://api.pokemontcg.io/v2/cards';
export const API_KEY = '7246f95c-2c88-4260-88a7-f08e22a41765'

export const URL_COMICS = 'mega';
export const URL_CHARACTERS = 'vmax';

class GetDataApi {
  async getData(url) {
      try {
          const response = await axios.get(url, {
            header: {
                'X-Api-Key': API_KEY,
                limit: 50,
            }
        });
          return response.data.data;
      } catch (error) {
          console.log(error.message);
          return false;
      }
  }
}

const getDataApi = new GetDataApi();

(async () => {
  const data = await getDataApi.getData(API_URL);
  console.log(data);
})();