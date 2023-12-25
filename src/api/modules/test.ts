import http from '@/api'
import * as qs from 'qs'

/**
 * batch get info of task node details
 * @param projectId
 * @returns
 */
export const getGraphTaskDetailsBatchApi = (options?: any) =>
  http.request({
    ...options,
    method: 'GET',
    url: '/graph/task/details/batch',
    // 序列化数组格式
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    }
  })

/**
 * stop tasks by specifying task id list
 * @param
 * @returns
 */
export const stopTaskBatchApi = (options?: any) =>
  http.request({
    ...options,
    method: 'POST',
    url: '/graph/task/build/batch/stop'
  })

/**
 * get my graph list
 * @param
 * @returns
 */
export const getGraphListApi = (options?: any) =>
  http.request({
    ...options,
    method: 'GET',
    url: '/graph/all'
  })

export function getMember() {
  return http.get('/member')
}

export function getTask(params: any) {
  return http.get('/user/add', { params })
}

// 新增用户
export const addUser = (params: { id: string }) => {
  return http.post(`/user/add`, params)
}

/*
qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'indices' })
// 'a[0]=b&a[1]=c'
qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'brackets' })
// 'a[]=b&a[]=c'  默认情况
qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'repeat' })
// 'a=b&a=c'
qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'comma' })
// 'a=b,c'
*/
