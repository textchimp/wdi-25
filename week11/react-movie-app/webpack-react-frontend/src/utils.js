import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "api_key=24d863d54c86392e6e1df55b9a328755";

const MovieDB = {

  getMovieSearchResults( query ){
    return axios.get(`${BASE_URL}/search/movie?${API_KEY}&query=${ query }`);
  },

  getMovieDetails( id ){
    return axios.get(`${BASE_URL}/movie/${ id }?${API_KEY}`);
  }

};

export default MovieDB;
