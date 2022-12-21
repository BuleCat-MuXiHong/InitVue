import axios from "axios";
//创建axios实例
const service = axios.create({
  // baseURL:_API_,
  baseURL:'http://127.0.0.1:8081/',
  timeout:60000
})

export default service
