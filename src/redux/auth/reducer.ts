import * as AUTH_CONSTANSTS from "./constants";

const initState = {
  isAuth: !!localStorage.getItem("token") || false,
  token: null,
  loading: false,
  error: null,
};

type AuthAction = {
  type: string;
  payload?: unknown;
};

function authReducer(state = initState, action: AuthAction) {
  switch (action.type) {
    case AUTH_CONSTANSTS.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTH_CONSTANSTS.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        token: action.payload,
      };
    case AUTH_CONSTANSTS.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default authReducer;
