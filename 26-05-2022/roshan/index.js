
function getValue(){
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;
  var email=document.getElementById("email").value;
  var mobilenumber=document.getElementById("mobilenumber").value;
  console.log({username,password,email,mobilenumber});

  document.getElementById("form").innerHTML=username;
  document.getElementById("go").innerHTML=password;
  document.getElementById("row").innerHTML=email;
  document.getElementById("column").innerHTML=mobilenumber;
  
  
}