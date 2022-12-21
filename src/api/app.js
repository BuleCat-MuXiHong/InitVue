import request from '@/utils/request'

export function get(url, params, options = {}) {
  return request({
    url,
    method: 'get',
    params,
    ...options
  })
}

export function post(url, params, options = {}) {
  return request({
    url,
    method: 'post',
    data: params,
    ...options
  })
}

export function _get (url, params, options = {}) {
  return request({
    url,
    method: 'get',
    params,
    headers: { token: local.getToken() },
    ...options
  })
}

export function _post (url, params, options = {}) {
  return request({
    url,
    method: 'post',
    data: params,
    headers: {
      token: local.getToken()
    },
    ...options
  })
}
