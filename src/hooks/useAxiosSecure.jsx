import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:8000/",
});
const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("token");
      // console.log('request stopped.......interceptor is working', token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // intercept 401 and 403 request
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error?.response?.status;
      console.log("error on the interceptor", status);

      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
