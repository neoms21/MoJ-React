import * as types from './actionTypes';
import fetch from 'isomorphic-fetch'

export function citiesLoadedSuccess(cities) {
  return {type: types.CITIES_LOADED, cities};
}


export function loadCities() {
  return dispatch => {
   // dispatch(beginAjaxCall());
    return fetch('https://restcountries.eu/rest/v1/region/Europe').then(cities => {
      console.log(cities);
      dispatch(citiesLoadedSuccess(cities));
    }).catch(error => {
      throw(error);
    });
  };
}
