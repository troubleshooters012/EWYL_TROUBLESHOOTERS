function getValues(){
    fname = document.getElementById("FirstName").value;
    lname = document.getElementById("LastName").value;
    dob = document.getElementById("DOB").value;
    email = document.getElementById("Email").value;
    phno = document.getElementById("PhoneNumber").value;
    gender = document.getElementsByName ("gender":checked).value;
    console.log([fname,lname,dob,email,phno,gender]);
    
    document.getElementById("sone").innerHTML=fname;
    document.getElementById("stwo").innerHTML=lname;
    document.getElementById("sthree").innerHTML=dob;
    document.getElementById("sfour").innerHTML=email;
    document.getElementById("sfive").innerHTML=phno;
    document.getElementById("ssix").innerHTML=gender;
}