import { request } from './request'

// 创建文章
export function createPost(post) {
  return request({
    // 传一个对象过来，以后如果添加字段时就简单了
    method: "post",
    url: '/posts',
    data: post,
  })
}

// 获取文章列表
// http://localhost:3000/posts?per_page=10&page=1
export function getHomePostList(page = 1, per_page = 10) {
  return request({
    method: "get",
    url: '/posts',
    params: {
      page,
      per_page,
    }
  })
}

// 获取文章详情
export function getPostDetail(id) {
  return request({
    method: "get",
    url: `/posts/${id}`,
  })
}

// 更新文章
export function updatePost(post, id) {
  return request({
    method: "patch",
    url: `/posts/${id}`,
    data: post,
  })
}

// 将文章放到垃圾箱
export function gotoTrash(pid) {
  const post = {
    "status": -2
  }
  return request({
    method: "patch",
    url: `/posts/${pid}`,
    data: post,
  })

}

// 将文章放到私密文件夹
export function gotoPrivate(pid) {
  const post = {
    "status": "-1"
  }
  return request({
    method: "patch",
    url: `/posts/${pid}`,
    data: post,
  })

}

// 将文章放到公开文件夹
export function gotoPublic(pid) {
  const post = {
    "status": "1"
  }
  return request({
    method: "patch",
    url: `/posts/${pid}`,
    data: post,
  })

}