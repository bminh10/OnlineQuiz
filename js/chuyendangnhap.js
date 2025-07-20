 function chuyen(){
   
   if( document.getElementById("tendn").value=="" || document.getElementById("mk").value==""){
      document.getElementById("kq").innerHTML = "Không được bỏ trống thông tin !";
     
   }
   else{
      document.getElementById("kq").innerHTML = "Đăng ký thành công"
      window.location.replace("menu.html");
   }
 }