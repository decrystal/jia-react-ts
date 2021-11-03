//兼容0或者undefined这种情况
//将非boolean转换成boolean
export const isFalsy = function(value) {
  return value===0 ? true : !!value;
}
export const cleanObject = function(obj) {
  let str = "";
  for(let i in obj) {
    if(isFalsy(obj[i])) {
      str+=`${i}=${obj[i]}&&`
    }
  }
  return str.slice(0, str.length-2);
}