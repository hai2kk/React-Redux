import axios from 'axios';

const API_KEY = 'f4c9da39278c4c86b23c5003d7e0b9da';
const ROOT_URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${API_KEY}`;


export const FETCH_MOVIE = 'FETCH_MOVIE';

export function fetchMovieDetails(movieName){
    const movieUrl = `${ROOT_URL}&query=${movieName}`;
    const response = axios.get(movieUrl);

    return {
        type : FETCH_MOVIE,
        payload : response
    };
}