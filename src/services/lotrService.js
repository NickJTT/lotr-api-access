import RestService from './restService.js';
import routeBuilder from '../helpers/routeBuilder.js';

const baseUrl = 'https://the-one-api.dev/v2';

export default class LotrService {
  static async getAllBooks(filterObject = {}) {
    const path = routeBuilder(`${baseUrl}/book`, filterObject);
    return await RestService.request(path);
  }

  static async getBookById(id) {
    return await RestService.request(`${baseUrl}/book/${id}`);
  }

  static async getBookChapters(id, filterObject = {}) {
    const path = routeBuilder(`${baseUrl}/book/${id}/chapter`, filterObject);
    return await RestService.request(path);
  }

  static async getAllMovies(filterObject = {}) {
    const path = routeBuilder(`${baseUrl}/movie`, filterObject);
    return await RestService.authorizedRequest(path);
  }

  static async getMovieById(id) {
    return await RestService.authorizedRequest(`${baseUrl}/movie/${id}`);
  }

  static async getAllMovieQuotes(id, filterObject = {}) {
    const path = routeBuilder(`${baseUrl}/movie/${id}/quote`, filterObject);
    return await RestService.authorizedRequest(path);
  }

  static async getAllCharacters(filterObject = {}) {
    const path = routeBuilder(`${baseUrl}/character`, filterObject);
    return await RestService.authorizedRequest(path);
  }

  static async getCharacterById(id) {
    return await RestService.authorizedRequest(`${baseUrl}/character/${id}`);
  }

  static async getAllCharacterQuotes(id, filterObject = {}) {
    const path = routeBuilder(`${baseUrl}/character/${id}/quote`, filterObject);
    return await RestService.authorizedRequest(path);
  }

  static async getAllQuotes(filterObject = {}) {
    const path = routeBuilder(`${baseUrl}/quote`, filterObject);
    return await RestService.authorizedRequest(path);
  }

  static async getQuoteById(id) {
    return await RestService.authorizedRequest(`${baseUrl}/quote/${id}`);
  }

  static async getAllChapters(filterObject = {}) {
    const path = routeBuilder(`${baseUrl}/chapter`, filterObject);
    return await RestService.authorizedRequest(path);
  }

  static async getChapterById(id) {
    return await RestService.authorizedRequest(`${baseUrl}/chapter/${id}`);
  }
}
