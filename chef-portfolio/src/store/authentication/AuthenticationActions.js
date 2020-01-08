// Action Types
import { SUCCESS, LOGOUT } from "./AuthenticationTypes";
import axiosWithAuth from "../../utils/AxiosWithAuth";

export const register = (event, history) => dispatch => {
  axiosWithAuth()
    .post("", event)
    .then(dispatch({ type: SUCCESS }))
    .catch(error => {
      console.log("nope");
      console.error(error);
    });
};

// store token and get user data for subsequent actions
export const login = token => {
  return { type: SUCCESS, payload: token };
};

export const logout = () => dispatch => {
  localStorage.clear();
  dispatch({ type: LOGOUT });
};
