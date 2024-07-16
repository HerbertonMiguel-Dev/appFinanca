import axios from "axios";

const api = axios.create({
  // baseURL: 'http://localhost:3333/users'
  baseURL: "http://10.206.23.151:3333",
});


export default api;