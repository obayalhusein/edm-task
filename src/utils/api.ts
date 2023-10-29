import * as coreAxios from "axios";
import { ApiConfig } from "../configs/ApiConfig";

// Create an instance of Axios
export const apiService = coreAxios.default.create({
  baseURL: ApiConfig.BASE_URL,
});

// Request interceptor
apiService.interceptors.request.use(
  (config) => {
    // Modify the request config here, e.g., add headers or authentication
    // You can also do this in your API class if you prefer

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
apiService.interceptors.response.use(
  (response) => {
    // Modify the response data here if needed

    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);
