import request from '@/utils/request'

let model = '/account'   //指定模块名称,快速生成增删改查接口名

export function payLog(data) {
  return request({
    url: model+'/pay-log',
    method: 'get',
    params: data
  })
}
