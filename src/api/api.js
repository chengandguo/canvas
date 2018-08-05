const API_ROOT = process.env.API_ROOT;
const api = {
  message: "message",
}

// 拼接请求的链接，为防止拼接错误，需要对结尾的“/”做判断
for(var name in api) {
  if(api.hasOwnProperty(name)) {
    if(API_ROOT[API_ROOT.length-1] === "/") {
      // API_ROOT 的结尾有“/”
      if(api[name][0] === "/") {
        api[name] = API_ROOT + api[name].slice(1); 
      } else {
        api[name] = API_ROOT + api[name]; 
      }     
    } else { 
      // API_ROOT 结尾没有 “/”
      if(api[name][0] === "/") {
        api[name] = API_ROOT + api[name];
      } else {
        api[name] = API_ROOT + "/" + api[name];
      }
      
    }
  }
}
export default api;
