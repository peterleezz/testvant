import base from './base'
import wepy from 'wepy'
import { serverUrl } from '@/utils/Config'
import Tips from '@/utils/Tips'

export default class form extends base {
  static async uploadFormId(id, type = 'inyoga') {
    Tips.setLoading()
    await this.post('api/common/formid', { id, type })
    Tips.loaded()
  }

  static async uploadFile(file) {
    if (
      file === null ||
      file === '' ||
      file.startsWith('http://192') ||
      file.startsWith('http://pic') ||
      file.startsWith('http://sci') ||
      file.startsWith('https://xcx') ||
      file.startsWith('http://cdn')
    ) {
      return file
    }
    Tips.loading('正在上传...')
    let res = await wepy.uploadFile({
      url: serverUrl + '/api/common/file',
      filePath: file,
      name: 'file'
      // header: {
      //   Accept: 'application/vnd.sci.v2+json',
      //   Authorization: 'Bearer ' + wepy.getStorageSync('token')
      // }
    })
    Tips.loaded()
    let ret = JSON.parse(res)
    return ret.data
  }
}
