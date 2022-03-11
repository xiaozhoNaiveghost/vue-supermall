import axios from "axios";

export function request(config) {
  // 方法1.创建aios的实例
  const instance = axios.create({
    baseURL: 'config',
    timeout: '10000',
  })
  // 2.axios的拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })
  //2.2 响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res); //获取结果 
    return res.data
  }, err => {
    console.log(err); //获取报错信息
  })
  //3.发送真正的网络请求
  return instance(config)
}

