//cookie相关操作
var CookieUtil = {
//根据key读取cookie
    get: function (name){
         //注意对键编码
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null,
            cookieEnd;
        //找到cookie键   
        if (cookieStart > -1){
             //键后面第一个分号位置
            cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1){
                cookieEnd = document.cookie.length;
            }
            //cookie值解码
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
    },
    //设置cookie
    set: function (name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        //失效时间，GMT时间格式
        if (expires instanceof Date) {
            cookieText += "; expires=" + expires.toGMTString();
        }
        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }
        document.cookie = cookieText;
    },
    //删除cookie，保持相同的键、域、路径、安全选项，然后设置失效时间即可
    unset: function (name, path, domain, secure){
        this.set(name, "", new Date(0), path, domain, secure);
    },
};

//时间格式化
function getTime(startDate) {  
    var t,y,m,d,h,i,s;  
    t = new Date(startDate);  
    y = t.getFullYear();  
    m = t.getMonth()+1;  
    d = t.getDate();  
    h = t.getHours();  
    i = t.getMinutes();  
    s = t.getSeconds();  
    // 可根据需要在这里定义时间格式  
    return (m<10?'0'+m:m)+'/'+(d<10?'0'+d:d);  
} 

