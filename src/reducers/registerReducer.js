import * as types from '../actions/actionTypes';

export default function registerReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_USER:
      return [
        ...state,
        Object.assign({}, action.user)
      ];

    default:
      return state;
  }
}
