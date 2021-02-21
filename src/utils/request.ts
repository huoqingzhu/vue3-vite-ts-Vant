import axios from "axios";
function getQueryString(name: string): number {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  const r = window.location.search.substr(1).match(reg);
  if (r != null) return Number(unescape(r[2]));
  return 0;
}
let baseURL = "http://123.56.85.24:5000/api/";
if (getQueryString("ip") == 1) {
  baseURL = "http://123.56.85.24:5000/api/";
} else if (getQueryString("ip") == 2) {
  baseURL = "http://fq.lycent.cn/api";
} else {
  baseURL = "http://123.56.85.24:5000/api";
}
const service = axios.create({
  baseURL,
  timeout: 5000 // request timeout
});
// 发起请求之前的拦截器
service.interceptors.request.use(
  config => {
    // 如果有token 就携带tokon
    const token = window.localStorage.getItem("accessToken");
    if (token) {
      config.headers.common.Authorization = token;
    }
    return config;
  },
  error => Promise.reject(error)
);
// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;

    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  error => {
    return Promise.reject(error);
  }
);
export default service;
