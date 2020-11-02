import { request } from './request'


// 用户注册
export function register(name, password) {
  return request({
    method: "post",
    url: '/users',
    data: {
      name,
      password
    },
  })
}

// 用户登录
export function login(name, password) {
  return request({
    method: "post",
    url: '/login',
    data: {
      name,
      password
    },
  })
}

// 更新用户信息
export function update(id, obj) {
  return request({
    method: "patch",
    url: `/users/${id}`,
    data: obj,
  })
}


// 获取登录用户信息
// export function getAuthUserInfo() {
//   return request({
//     method: "get",
//     url: '/userinfo',
//   })
// }

// 获取特定用户的信息
export function getUserInfo(id) {
  return request({
    method: "get",
    url: `/users/${id}`,
  })
}



// 获取某人文章列表
export function getUserPosts(id) {
  return request({
    method: "get",
    url: `/users/${id}/posts`,
  })
}

// 获取某人连载列表
export function getAuthorNoteBooks(id) {
  return request({
    method: "get",
    url: `/users/${id}/nbs`,
  })
}

// 关注某人
// router.put('/users/following/:id',auth, follow)
export function followingUser(id) {
  return request({
    method: "put",
    url: `/users/following/${id}`,
    params: {
      id
    }
  })
}

// 取关某人
// router.get('/users/:id/following', listFollowing)
// router.put('/users/following/:id',auth, follow)
// router.delete('/users/following/:id', auth, unfollow)
// router.get('/users/:id/followers', listFollowers)
export function unfollowingUser(id) {
  return request({
    method: "delete",
    url: `/users/following/${id}`,
    params: {
      id
    }
  })
}

// 获取关注列表
// router.get('/users/:id/following', listFollowing)
export function listfollowingUser(id) {
  return request({
    method: "get",
    url: `/users/${id}/following`,
    params: {
      id
    }
  })
}


// 获取粉丝列表
// router.get('/users/:id/followers', listFollowers)
export function listfollower(id) {
  return request({
    method: "get",
    url: `/users/${id}/followers`,
    params: {
      id
    }
  })
}

// 上传用户头像
// export function uploadImg(imgFile) {
//   return request({
//     method: "post",
//     url: '/upload',
//     data: {
//       imgFile
//     }
//   })
// }

export function uploadImg(bodyFormData) {
  return request({
    method: 'post',
    url: '/upload',
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}


// ({
//   method: 'post',
//   url: 'myurl',
//   data: bodyFormData,
//   headers: { 'Content-Type': 'multipart/form-data' }
// })
//   .then(function (response) {
//     //handle success
//     console.log(response);
//   })
//   .catch(function (response) {
//     //handle error
//     console.log(response);
//   });
