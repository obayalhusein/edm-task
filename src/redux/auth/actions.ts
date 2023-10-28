import * as AUTH_CONSTANSTS from "./constants";
import { apiService } from "../../services/api";
import { Dispatch } from "redux";

export const login = ({email, password}) => async (dispatch:Dispatch) => {

  dispatch({
    type: AUTH_CONSTANSTS.LOGIN_REQUEST,
  })

  try {
   const res =  await apiService.post('/login', {email, password})
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

export const Logout = () => async (dispatch: Dispatch) => {
  return;
};
