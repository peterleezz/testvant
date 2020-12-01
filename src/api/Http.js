 // HTTP工具类
 import store from 'store'
 import wepy from '@wepy/core'
 import Tips from './Tips'
 export default class http {

   static createAuthHeader() {
     let token = store.getters.token
     const header = {
       app: 'bujing',
       no: '2',
       'content-type': 'application/x-www-form-urlencoded',
       Accept: 'application/vnd.sci.v2+json'
     }
     if (token) {
       header['Authorization'] = 'Bearer ' + token
     }
     return header
   }


   static request(method, u, data) {
     const header = this.createAuthHeader()
     let url = BASE_URL + u
     const param = {
       url,
       method: method,
       data: data,
       header
     }
     let that = this
     Tips.loading()

     return new Promise((resolve, reject) => {


       wx.request({ ...param,
         success(res) {
           Tips.loaded()
           if (that.isSuccess(res)) {
             if (res.statusCode == 201 && !res.data) resolve(res.header.Location)
             resolve(res.data)
           } else {
             console.error(method, url, data, res)

             let error = that.requestException(res)
             reject(error)
           }
         },
         fail(res) {
           Tips.loaded()
           console.log('fail', res)
         }
       })



     })



   }

   /**
    * 判断请求是否成功
    */
   static isSuccess(res) {
     const wxCode = res.statusCode
     // 微信请求错误
     if (wxCode >= 200 && wxCode < 300) {
       if (res.statusCode == 201 && res.data == '') {
         res.data = res.header.Location
       }
       return true
     }
     return false
   }

   static requestException(res) {
     if (res.statusCode == 401) res.data.message = 'Unauthorized'
     let error = ''
     if (res.data.errors) {
       for (let key in res.data.errors) {
         error += res.data.errors[key]
         return error
       }
     } else {
       error = res.data.message
     }

     return error
   }

   static get(url, data) {
     return this.request('GET', url, data)
   }

   static put(url, data) {
     return this.request('PUT', url, data)
   }

   static post(url, data) {
     return this.request('POST', url, data)
   }

   static patch(url, data) {
     return this.request('PATCH', url, data)
   }

   static delete(url, data) {
     return this.request('DELETE', url, data)
   }

 }
