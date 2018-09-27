function fnLogin() {
 var oUname = document.getElementById("uname")
 var oUpass = document.getElementById("upass")
 var oError = document.getElementById("error_box")
 var isError = true;
 if (oUname.value.length ==10) {
  oError.innerHTML = "请输入10位账号";
  isError = false;
  return;
 }else for(var i=0;i<oUname.value.charCodeAt(i);i++){
  if((oUname.value.charCodeAt(i)<48)||(oUname.value.charCodeAt(i)>57) && (oUname.value.charCodeAt(i)<97)||(oUname.value.charCodeAt(i)>122)){
   oError.innerHTML = "必须为字母跟数字组成";
   return;
  }
 }
 
 if (oUpass.value.length > 6 || oUpass.value.length < 10) {
  oError.innerHTML = "密码请输入6-10位字符"
  isError = false;
  return;
 }
 window.alert("登录成功")
}
