import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'ec14426c2f48f894f7b9105cd8c876c5';

export const getTrendingFilms = async () => {
  const {
    data: { results },
  } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return results;
};

export const getFilmsById = async id => {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getFilmsByQuery = async query => {
  const {
    data: { results },
  } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query='${query}'&language=en-US&page=1&include_adult=false`
  );
  return results;
};

export const getMovieCredits = async id => {
  const {
    data: { cast },
  } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  return cast;
};

export const getMovieReviews = async id => {
  const {
    data: { results },
  } = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return results;
};
