import { createStore } from 'vuex'


// 图片地址多环境配置
let imgBaseUrl
if (process.env.NODE_ENV == 'production') {
  //线上
  imgBaseUrl = 'https://jian.cemcoe.com/jianshu_api'
} else if (process.env.NODE_ENV == 'development') {
  //本地
  imgBaseUrl = 'https://jian.cemcoe.com/jianshu_api'
} else {
  //预发布
  imgBaseUrl = 'http://localhost:3000'
}



export default createStore({
  state: {
    // https://stackoverflow.com/questions/46915002/argument-of-type-string-null-is-not-assignable-to-parameter-of-type-string
    user: JSON.parse(localStorage.getItem('user') || '{}') || {},
    token: localStorage.getItem('token') || '',
    imgBaseUrl: imgBaseUrl, // 图片地址
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    setUser(state, user) {
      // 拿到完整的图片地址
      user.avatar = state.imgBaseUrl + user.avatar
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
      // localStorage 注意格式转换
    },
  },
  actions: {

  },
  modules: {
  }
})
