import axios from 'axios';
import {API_KEY} from '../utils/utils.js'

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
export const getDataApi = new GetDataApi();