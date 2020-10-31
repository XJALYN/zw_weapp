
const request = require('./request')
const baseUrl = 'http://127.0.0.1:8080'
const login = (data)=>{
  return request.get(baseUrl+'/user/login',data)
}
module.exports = {
  login
}