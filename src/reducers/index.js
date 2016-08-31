import {combineReducers} from 'redux';
import register from './registerReducer';
import cities from './citiesReducer';

const rootReducer = combineReducers({
  register,
  cities
});

export default rootReducer;
