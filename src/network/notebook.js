import { request } from './request'

// 创建新连载
export function createNoteBook(notebook) {
  return request({
    // 传一个对象过来，以后如果添加字段时就简单了
    method: "post",
    url: '/nbs',
    data: notebook,
  })
}


// 获取连载详情
export function getNoteBookDetail(id) {
  return request({
    method: "get",
    url: `/nbs/${id}`,
  })
}

// 获取连载列表
// http://localhost:3000/nbs?per_page=10&page=1
export function getNoteBookList(page = 1, per_page = 10) {
  return request({
    method: "get",
    url: '/nbs',
    params: {
      page,
      per_page,
    }
  })
}


// 将文章添加到连载中
export function addPostToNoteBook(nid, pid) {
  return request({
    method: "put",
    url: `/nbs/${nid}/${pid}`,
  })
}