import * as types from '../actions/actionTypes';

export default function citiesReducer(state = [], action) {
  switch (action.type) {
    case types.CITIES_LOADED:
      return action.cities;
    default:
      return state;
  }
}
