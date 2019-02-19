/**
 * 将json对象转换为params参数
 * @param {Object} data
 * @return {String}  'xx=xxx&xx=xx'
 */
const jsontoparams = (data) => {
    let params = ''
    for (let key in data) {
      params += key + '=' + JSON.stringify(data[key]) + '&'
    }
    return params.substr(0, params.length - 1)
  }
  
  const jsonp  = (url, data) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      const fnName = 'jQuery' + ( + new Date() )
      script.src = url + '?' + 'callback=' + fnName + '&' + jsontoparams(data)
      window[fnName] = (data) => {
        resolve(data) 
        window[fnName] = null
      }
      document.body.appendChild(script)
    })
  }
  
  export default jsonp