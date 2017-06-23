export function getQueryString(name) { 
    let searchStr = window.location.search ;
    return __getQueryStringBySearchStr(name,searchStr) ;
}  
//从给定的
function __getQueryStringBySearchStr(name,searchStr) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = searchStr.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); 
    return null; 
}  

function getContextPath(){
    return '' ;
}

export function dealProjectUrl(url){
    return getContextPath() + url ;
}

export function joinArr2Str(arr,splitStr){
    if(arr == null || arr.length == 0){
        return '' ;
    }
    return arr.join(splitStr ? splitStr : ',') ;
}

export default {
   getQueryString ,
   dealProjectUrl,
   joinArr2Str
} ;

