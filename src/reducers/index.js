import { combineReducers } from 'redux';
import MovieReducer from './reducerMovie';

const rootReducer = combineReducers({
  movieDetail : MovieReducer
});

export default rootReducer;
