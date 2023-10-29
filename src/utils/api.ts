import * as coreAxios from "axios";
import { ApiConfig } from "../configs/ApiConfig";

// Create an instance of Axios
export const apiService = coreAxios.default.create({
  baseURL: ApiConfig.BASE_URL,
});
