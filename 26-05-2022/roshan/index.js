function getValue() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  /*array*/
  console.log([username, password]);
  /*object*/
  console.log({'name':username, "password":password});
  /*To show password*/
  var mydetails={"name":username,"password":password};
  console.log(mydetails.password);
  document.getElementById("js").innerHTML=username;
  
}

