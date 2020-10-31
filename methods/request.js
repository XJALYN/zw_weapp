

const request = (url,method,data)=>{
    return new Promise((resolve,reject)=>{
        wx.request({
          url: url,
          data:data,
          method:method,
          success:res=>{
              if(res.statusCode===200){
                if(res.data.code===0){
                    resolve(res.data.data)
                  }else{
                    // 根据状态码 进行处理数据  
                    reject(res.data.msg)
                  }
              }else{
                reject('网络异常')
              }
          },
          fail:error=>{
              reject(error.errMsg)
          }
        })
    })
}

exports.post = (url,data)=>{
    return request(url,"POST",data)
}

exports.get = (url,data)=>{
    return request(url,'GET',data)
}
