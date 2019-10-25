import request from '@/utils/request'

let model = '/account'   //指定模块名称,快速生成增删改查接口名

export function payLog(data) {
  return request({
    url: model+'/pay-log',
    method: 'get',
    params: data
  })
}

export function pusherCashIndex(data) {
  return request({
    url: model + '/pusher-cash-index',
    method: 'get',
    params: data
  })
}

export function pusherCashAudit(data) {
  return request({
    url: model + '/pusher-cash-audit',
    method: 'post',
    data
  })
}

export function storeCashIndex(data) {
  return request({
    url: model + '/store-cash-index',
    method: 'get',
    params: data
  })
}

export function storeCashAudit(data) {
  return request({
    url: model + '/store-cash-audit',
    method: 'post',
    data
  })
}

export function couponIndex(data) {
  return request({
    url: model + '/coupon-index',
    method: 'get',
    params: data
  })
}

export function couponCreate(data) {
  return request({
    url: model + '/coupon-create',
    method: 'post',
    data
  })
}
