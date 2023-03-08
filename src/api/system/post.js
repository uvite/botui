import { request } from '@/utils/request.js'

export default {
  /**
   * 获取岗位分页列表
   * @returns
   */
  getPageList(params = {}) {
    return request({
      url: 'post/index',
      method: 'post',
      data:params
    })
  },

  /**
   * 获取岗位列表
   * @returns
   */
  getList(params = {}) {
    return request({
      url: 'post/list',
      method: 'get',
      params
    })
  },

  /**
   * 从回收站获取岗位
   * @returns
   */
  getRecyclePageList(params = {}) {
    return request({
      url: 'system/post/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 添加岗位
   * @returns
   */
  save(params = {}) {
    params.status=parseInt(params.status)
    return request({
      url: 'post/save',
      method: 'post',
      data: params
    })
  },

  /**
   * 移到回收站
   * @returns
   */
  deletes(data) {
    return request({
      url: 'post/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 恢复数据
   * @returns
   */
  recoverys(data) {
    return request({
      url: 'system/post/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除
   * @returns
   */
  realDeletes(data) {
    return request({
      url: 'system/post/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更新数据
   * @returns
   */
  update(id, data = {}) {
    data.status=parseInt(data.status)
    return request({
      url: 'post/update',
      method: 'put',
      data
    })
  },

  /**
   * 数字运算操作
   * @returns
   */
   numberOperation(data = {}) {
    return request({
      url: 'post/numberOperation',
      method: 'put',
      data
    })
  },

  /**
   * 更改岗位状态
   * @returns
   */
  changeStatus(data = {}) {
    return request({
      url: 'post/changeStatus',
      method: 'put',
      data
    })
  },

}
