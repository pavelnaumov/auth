import {
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from "../actions/types";

const INIT_STATE = {};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return action.payload;
    case EMPLOYEE_SAVE_SUCCESS:
      return INIT_STATE;
    default:
      return state;
  }
};
