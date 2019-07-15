import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
  } from "./types";
  import firebase from "firebase";
  import { Actions } from "react-native-router-flux";
  
  /**
   * This is an action that reacts to
   * changing the email
   */
  export const emailChanged = text => {
    return {
      type: EMAIL_CHANGED,
      payload: text
    };
  };
  
  /**
   * This is an action that reacts to
   * changing the password
   */
  export const passwordChanged = text => {
    return {
      type: PASSWORD_CHANGED,
      payload: text
    };
  };
  
  /**
   * This is an action that is responsible to sending
   * an AJAX request to log the user in.
   *
   * Note, it is async.
   */
  
  export const loginUser = ({ email, password }) => {
    return dispatch => {
      dispatch({ type: LOGIN_USER });
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch));
        });
    };
  };
  
  const loginUserSuccess = (dispatch, user) => {
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
    });
  
    Actions.main();
  };
  
  const loginUserFail = dispatch => {
    dispatch({ type: LOGIN_USER_FAIL });
  };
  