import { request } from './request'

// 获取活动列表

export function getActivityList() {
  return request({
    method: "get",
    url: '/activities',
  })
}
