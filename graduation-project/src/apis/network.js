
import axios from 'axios'
import qs from 'qs'
// import serverConfig from '../serverConfig'

// axios.defaults.withCredentials = true

// function createParams (params) {
// // if (!params.platform) {
//   //  params.platform = 'web'
// // }

//   // filter "" null undef
//   return filterObject(params)
// }

//export function createMiddleParams (params) {
  // if (!params.appkey) {
  //   params.appkey = serverConfig.middleAppKey
  // }
  // if (!params.token) {
  //  params.token = userInfo.middle_token
  // }
  // if (!params.channelID) {
  //  params.channelID = userInfo.middle_channelID
  // }

  //return filterObject(params)
//}

export function createPostApi (url, params, timeout = 10000) {
  const realParams = filterObject(params)
  // console.log(realParams) // todo 测试添加实际传递参数打印
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(realParams), {
      timeout: timeout
    }).then((response) => {
      const res = response.data
      if (!res) {
        reject(new Error('请求结果为空'))
      } else if (typeof res !== 'object') {
        reject(new Error('服务端返回异常'))
      } else if (res.ret === -1) {
        res.message = res.msg
        reject(res)
      } else {
        resolve(res)
      }
    })
      .catch((error) => {
        console.log(error)
        if (axios.isCancel(error)) {
        } else {
          reject(new Error('亲，您的网络不太顺畅哦'))
        }
      })
  })
}
/**
 * 仅仅对结果是否为空进行验证，不进行进一步验证
 * @param url
 * @param params
 * @returns {Promise}
 */
/*export function createDownloadPostApi (url, params) {
  const realParams = filterObject(params)
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(realParams), {
      timeout: 10000
    }).then((response) => {
      const res = response.data
      if (!res) {
        reject(new Error('请求结果为空'))
      } else {
        resolve(res)
      }
    })
      .catch((error) => {
        console.log(error)
        if (axios.isCancel(error)) {
        } else {
          reject(new Error('亲，您的网络不太顺畅哦'))
        }
      })
  })
}*/
export function filterObject (obj) {
  var param = {}
  if (obj === null || obj === undefined || obj === '') return param
  for (var key in obj) {
    if (dataType(obj[key]) === 'Object') {
      param[key] = filterObject(obj[key])
    } else if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
      param[key] = obj[key]
    }
  }
  return param
}

function dataType (obj) {
  if (obj === null) return 'Null'
  if (obj === undefined) return 'Undefined'
  return Object.prototype.toString.call(obj).slice(8, -1)
}
