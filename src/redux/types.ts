import { ProductRoot } from "../types/productTypes";

export interface RootState {
  authReducer: AuthState;
  productReducer: ProductState;
}

interface AuthState {
  isAuth: boolean;
  token: string | null;
  loading: boolean;
  error: string | null;
}

interface ProductState {
  loading: boolean;
  error: string | null;
  products: ProductRoot;
}
