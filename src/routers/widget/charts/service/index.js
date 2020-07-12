import request from '@/utils/request'

export function getLine(data) {
  return request({
    url: '/vue-admin-template/charts/getLine',
    method: 'post',
    data
  })
}
