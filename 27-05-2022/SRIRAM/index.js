function getValues(){
    var fname = document.getElementById("FirstName").value;
    lname = document.getElementById("LastName").value;
    dob = document.getElementById("DOB").value;
    email = document.getElementById("Email").value;
    phno = document.getElementById("PhoneNumber").value;
    console.log({"fname":fname,"lname":lname,"date":dob,"mail":email,"num":phno});
    var studentDetails=[
        {
            fname : "sriram",
            lname : "D B",
            dob : 17-09-2002,
            email : "sriram@gmail.com",
            phno : 9080373479
        },
        {
            fname : "dharshan",
            lname : "P M",
            dob : 17-09-2002,
            email : "dharshan@gmail.com",
            phno : 123456789
        },
        {
            fname : "hemanth",
            lname : "D",
            dob : 17-09-2002,
            email : "hemanth@gmail.com",
            phno : 987654321
        },
        {
            fname : "parthipan",
            lname : "M",
            dob : 17-09-2002,
            email : "parthipan@gmail.com",
            phno : 789456123
        }
    ]
    studentDetails.forEach(function(obj){
        if(obj.firstname == fname){
            document.getElementById("sone").innerHTML= "Log in ";

        }
    }
    );
}