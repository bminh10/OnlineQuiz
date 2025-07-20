 function chuyen(){
   
   if(document.getElementById("hoten").value=="" || document.getElementById("tendn").value=="" || document.getElementById("email").value=="" || document.getElementById("mk").value==""){
      document.getElementById("kq").innerHTML = "Không được bỏ trống thông tin !";
     
   }
   else{
      document.getElementById("kq").innerHTML = "Đăng ký thành công"
      window.location.replace("menu.html");
   }
 }