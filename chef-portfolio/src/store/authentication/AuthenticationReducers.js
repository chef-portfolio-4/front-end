import { LOGOUT, SUCCESS } from "./AuthenticationTypes";

const authenticationInitialState = {
  name: "",
  isAuthenticated: false
};

export const authenticationReducer = (
  state = authenticationInitialState,
  action
) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };

    case LOGOUT:
      return {
        name: "",
        isAuthenticated: false
      };

    default:
      return state;
  }
};
