import axios from 'axios'
// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}` || ''
// 当token变化时不能及时更改，只有刷新页面时才行

// 多环境配置
let apiUrl
if (process.env.NODE_ENV == 'production') {
  //线上
  apiUrl = 'https://jian.cemcoe.com/jianshu_api'
} else if (process.env.NODE_ENV == 'development') {
  //本地
  apiUrl = 'http://localhost:3000'
} else {
  //预发布
  apiUrl = 'http://localhost:3000'
}

export function request(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: apiUrl,
    timeout: 10000, // 设置超时时间10s
  })
  // 2. 请求拦截器，添加jwt token

  instance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}` || ''
    // 每个请求都重新设置有点耗费资源，一般token发生改变会是换账号登录，或token过期，可能会有更好的方案。
    return config
  }, err => {
    console.log(err)

  })
  // 3. 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error.response)
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 清楚本地保存的用户信息和token信息
          localStorage.removeItem("token");
          localStorage.removeItem('user')  
      }
    }
    return Promise.reject(error.response.data);
  })

  // 4. 发送真正的网络请求
  return instance(config)
}