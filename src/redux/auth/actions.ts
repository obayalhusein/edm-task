import * as AUTH_CONSTANSTS from "./constants";
import { apiService } from "../../utils/api";
import { AnyAction, Dispatch } from "redux";

interface LoginActionPayload {
  identifier: string;
  password: string;
}

export const loginAction = (payload: LoginActionPayload) => async (dispatch: Dispatch<AnyAction>) => {
  dispatch({
    type: AUTH_CONSTANSTS.LOGIN_REQUEST,
  })

  try {
    const res =  await apiService.post('/auth/local', payload);
    localStorage.setItem('token', res.data.token);
    dispatch({
      type: AUTH_CONSTANSTS.LOGIN_SUCCESS,
      payload: res.data.token
    });
  }
  catch (error) {
    dispatch({
      type: AUTH_CONSTANSTS.LOGIN_FAILURE,
      payload: error
    });
  }

}

export const logoutAction = () => (dispatch: Dispatch) => {
  localStorage.removeItem('token');

  dispatch({
    type: AUTH_CONSTANSTS.LOGOUT_SUCCESS,
  });
};
