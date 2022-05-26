function getValues(){
    var username = document.getElementById("User_name").value;
    var password = document.getElementById("pwd").value;
    console.log([username, password]);
    console.log({"name": username,"password" : password});
}