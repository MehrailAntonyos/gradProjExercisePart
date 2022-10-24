
import axios from "axios";
export const axiosInstance = axios.create({
 baseURL: "http://localhost:8000/api/v1/",
 params: {
  //  api_key: "7a1c19ea3c361a4d3cc53eb70ef8298c",
 },
 });
axiosInstance.interceptors.request.use(

   function (config)
   {
       //config.headers["a"]="dsdsd"
       return config;
   }
)

axiosInstance.interceptors.response.use(

   function(response)
   {
       return response;
   }
)

export const axiosInstance2 = axios.create({
    baseURL: "https://dummyjson.com/",
    params: {
     //  api_key: "7a1c19ea3c361a4d3cc53eb70ef8298c",
    },
    });
    axiosInstance2.interceptors.request.use(
   
      function (config)
      {
          //config.headers["a"]="dsdsd"
          return config;
      }
   )
   
   axiosInstance2.interceptors.response.use(
   
      function(response)
      {
          return response;
      }
   )