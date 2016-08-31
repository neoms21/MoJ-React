import * as types from './actionTypes';
import userApi from '../api/userApi';

// export function loadCoursesSuccess(courses) {
//   return { type: types.LOAD_COURSES_SUCCESS, courses};
// }

export function createUserSuccess(user) {
  return {type: types.CREATE_USER, user};
}

// export function updateCourseSuccess(course) {
//   return {type: types.UPDATE_COURSE_SUCCESS, course};
// }

// export function loadCourses() {
//   return function(dispatch) {
//     dispatch(beginAjaxCall());
//     return courseApi.getAllCourses().then(courses => {
//       dispatch(loadCoursesSuccess(courses));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }
//
export function createUser(user) {
  return function (dispatch, getState) {
    // dispatch(beginAjaxCall());
    return userApi.saveUser(user).then(user => {
        dispatch(createUserSuccess(user));
    }).catch(error => {
      // dispatch(error);
      throw(error);
    });
  };
}
