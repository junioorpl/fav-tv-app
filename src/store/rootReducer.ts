import {combineReducers} from 'redux';
import {MoviesReducer} from './slices';

const rootReducer = combineReducers({
  movies: MoviesReducer,
});

export default rootReducer;
