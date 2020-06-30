import request from '@/utils/request'

export function getAllRuleType(data) {
  return request({
    url: '/plugin-suspension/manage/getAllRuleType',
    method: 'post',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    data: JSON.stringify(data)
  })
}
