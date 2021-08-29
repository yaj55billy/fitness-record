import axios from "axios";

const recordRequest = axios.create({
  baseURL: "https://fitness-api-server.herokuapp.com/",
});

// get
export const apiGetSquatData = () =>
  recordRequest.get("/squatdata?_sort=date&_order=desc");
// desc 日期由大至小； asc 相反

// get
export const apiGetSingleSquatData = (id) =>
  recordRequest.get(`/squatdata/${id}`);

// post
export const apiPostSquatData = (data) =>
  recordRequest.post("/squatdata", data);

// put
export const apiPutSquatData = (data) =>
  recordRequest.put(`/squatdata/${data.id}`, data);

// delete
export const apiDeleteSquatData = (id) =>
  recordRequest.delete(`/squatdata/${id}`);

// recordRequest.interceptors.request.use(
//   function(config) {
//     return config;
//   },
//   function(error) {
//     return Promise.reject(error);
//   }
// );

// recordRequest.interceptors.response.use(
//   function(response) {
//     return response;
//   },
//   function(error) {
//     return Promise.reject(error);
//   }
// );
