export const uniq = (array) => {
    var temp = [];
    var index = [];
    var l = array.length;
    for(var i = 0; i < l; i++) {
        for(var j = i + 1; j < l; j++){
            if (array[i] === array[j]){
                i++;
                j = i;
            }
        }
        temp.push(array[i]);
        index.push(i);
    }
    return temp;
}

export const GetRequ = (url) => {
    let theRequest = {};
    if(url.indexOf('?') !== -1) {
        let str = url.substr(1);
        let strs = str.split('&');
        for(let i=0; i<strs.length; i++) {
            theRequest[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1]);
        }
    }
    return theRequest;        
}

export function UrlSearch(str)
{
    var name,value;
    var str= str;
    var num=str.indexOf("?");
    str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]

    var arr=str.split("&"); //各个参数放到数组里
    for(var i=0;i < arr.length;i++){
        num=arr[i].indexOf("=");
        if(num>0){
            name=arr[i].substring(0,num);
            value=arr[i].substr(num+1);
            this[name]=value;
        }
    }
}