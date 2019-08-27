import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/news/index',
    method: 'get',
    params: data
  })
}

export function getInfo(data) {
  return request({
    url: '/news/info',
    method: 'get',
    params: data
  })
}

export function changeStatus(data) {
  return request({
    url: '/news/change-status',
    method: 'post',
    data
  })
}

export function cateOptions() {
  return request({
    url: '/news/cate-options',
    method: 'get'
  })
}

export function edit(data) {
  return request({
    url: '/news/edit',
    method: 'post',
    data
  })
}

export function getNews(data) {
  return request({
    url: '/news/change-status',
    method: 'post',
    data
  })
}

export function setSticky(data) {
  return request({
    url: '/news/set-sticky',
    method: 'post',
    data
  })
}

export function destroy(data) {
  return request({
    url: '/news/destroy',
    method: 'post',
    data
  })
}
