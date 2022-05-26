function getValue() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  console.log([username, password]);
  console.log({'name':username, "password":password});
  var mydetails={"name":username,"password":password};
  console.log(mydetails.password);
  document.getElementById("js").innerHTML=username;
  
}

