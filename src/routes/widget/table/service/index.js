import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/vue-admin-template/datatable/list',
    method: 'post',
    data
  })
}
