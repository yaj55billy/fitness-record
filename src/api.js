import axios from "axios";

const recordRequest = axios.create({
  baseURL: "https://fitness-api-server.herokuapp.com/",
});

// get
export const apiGetSquatData = () =>
  recordRequest.get("/squatdata?_sort=date&_order=asc"); // 參數照日期排列

// post
export const apiPostSquatData = (data) =>
  recordRequest.post("/squatdata", data);

// put
export const apiPutSquatData = (data) =>
  recordRequest.put(`/squatdata/${data.id}`, data);

// delete
export const apiDeleteSquatData = (id) =>
  recordRequest.delete(`/squatdata/${id}`);

// axios
//   .put(`https://fitness-api-server.herokuapp.com/squatdata/${obj.id}`, obj)
//   .then(function(res) {
//     // console.log(res);
//     store.dispatch("getSquatData");
//     // console.log(res);
//   })
//   .catch(function(e) {
//     console.log(e);
//   });

// axios
//   .delete(`https://fitness-api-server.herokuapp.com/squatdata/${id}`)
//   .then(function(res) {
//     console.log("delete");
//     store.dispatch("getSquatData");
//     // console.log(1);
//     // console.log(res);
//     // commit("deleteDataMutation", id);
//   })
//   .catch(function(e) {
//     console.log(e);
//   });

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
