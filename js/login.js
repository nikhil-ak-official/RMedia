var username;
var userpsw ;
var nameerror = document.getElementById("unameerror");
var pswerror = document.getElementById("pswerror");
var userList = JSON.parse(localStorage.getItem("users"))

function userLogin(e) {
    e.preventDefault();
    username = document.getElementById("uname").value;
    userpsw = document.getElementById("psw").value;
    var valid = loginValid();
    if (valid) {
        location.href="home.html";
    }
}


function loginValid() {
    if (username==null || username=="") {
        nameerror.innerHTML="Please fill out this field";
    }
    if (userpsw==null || userpsw=="") {
        pswerror.innerHTML="Please fill out this field";
    }
   
    if(username == userList["username"]) {
        if(userpsw == userList["password"]) {
            var currentuser = {"fname":userList["firstname"],"lname":userList["lastname"]};
            localStorage.setItem("currentUser",JSON.stringify(currentuser));
            return true;
        }
        else {
            pswerror.innerHTML = "Wrong password";
            return false;
        }
    }
    nameerror.innerHTML = "User doesnt  exist";
    return false;
};


           
        
   