import * as AUTH_CONSTANSTS from "./constants";
import { apiService } from "../../services/api";
import { AnyAction, Dispatch } from "redux";

interface LoginActionPayload {
  email: string;
  password: string;
}

export const loginAction = (payload: LoginActionPayload) => async (dispatch: Dispatch<AnyAction>) => {

  dispatch({
    type: AUTH_CONSTANSTS.LOGIN_REQUEST,
  })

  try {
   const res =  await apiService.post('/login', payload)
    localStorage.setItem('token', res.data.token)
    dispatch({
      type: AUTH_CONSTANSTS.LOGIN_SUCCESS,
      payload: res.data.token
    })


  } catch (error) {
    dispatch({
      type: AUTH_CONSTANSTS.LOGIN_FAILURE,
      payload: error
    })
  }


}

export const LogoutAction = () => async (dispatch: Dispatch<AnyAction>) => {
  return;
};
