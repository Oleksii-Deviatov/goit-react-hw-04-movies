import axios from 'axios';

const API_KEY = 'ab913aab0cc65677a88cac6e0bf2cdf4';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

const trending = async () => {
  try {
    const { data } = await axios.get('trending/movie/day');
    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const search = async query => {
  try {
    const { data } = await axios.get('search/movie', {
      params: { query, include_adult: false, page: 1 },
    });
    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const fullInfo = async movie_id => {
  try {
    const { data } = await axios.get(`movie/${movie_id}`);
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const credirs = async movie_id => {
  try {
    const { data } = await axios.get(`movie/${movie_id}/credits`);
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const reviews = async movie_id => {
  try {
    const { data } = await axios.get(`movie/${movie_id}/reviews`, {
      params: { page: 1 },
    });
    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export { trending, search, fullInfo, credirs, reviews };
