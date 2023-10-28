export interface RootState {
  authReducer: AuthState;
}

interface AuthState {
  isAuth: boolean;
  token: string | null;
  loading: boolean;
  error: string | null;
}

