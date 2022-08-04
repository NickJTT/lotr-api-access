import LotrService from './src/services/lotrService.js';

const call = async () => {
  const result = await LotrService.getAllMovies();
  console.log(result);
}

call();
