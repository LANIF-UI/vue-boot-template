import request from '@/utils/request'

export function demo(params) {
  return request({
    url: 'url',
    method: 'get',
    params
  })
}
