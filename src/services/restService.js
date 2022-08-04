import axios from 'axios';

const authKey = 'LLeS4eGKdLVfxQxpPtVO';
const authToken = `Bearer ${authKey}`;
const authHeader = { Authorization: authToken };

const requestConfig = { headers: authHeader };

export default class RestService {
  static async request(route) {
    try {
      const result = await axios.get(route);
      return result.data; 
    } catch (exception) {
      console.error(exception);
    }
  }

  static async authorizedRequest(route) {
    try {
      const result = await axios.get(route, requestConfig);
      return result.data; 
    } catch (exception) {
      console.error(exception);
    }
  }
}
