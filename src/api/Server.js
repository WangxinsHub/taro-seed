import Taro from '@tarojs/taro'

class Http {
  constructor(){
    const HOSTNAME = process.env.API_HOSTNAME
    this.url={}
  }
  request(method = 'post', url, params) {
    Taro.showNavigationBarLoading()
    return new Promise((resolve, reject) => {
      Taro.request({
        url,
        method,
        data: params,
        header: {
          'Content-Type': 'application/json;charset=utf-8',
          'Accept': '*/*'
        }
      }).then(res => {
        Taro.hideNavigationBarLoading()
        resolve(typeof res.data === 'object' ? res.data : JSON.parse(res.data))
      }, err => {
        Taro.hideNavigationBarLoading()
        reject(err)
      })
    })
  }
}

export default new Http();
