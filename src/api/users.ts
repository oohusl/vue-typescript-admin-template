import request from '@/utils/request'

export const getUserInfo = () =>
  request({
    url: '/uaa/api/account',
    method: 'get'
  })

export const login = (data: any) =>
  request({
    url: '/uaa/api/authenticate',
    method: 'post',
    data
  })

export const logout = () =>
  request({
    url: '/uaa/users/logout',
    method: 'post'
  })
