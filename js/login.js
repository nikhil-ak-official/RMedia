var username = document.getElementById("fname").value;
var userpsw = document.getElementById("psw").value;
var fnameerror = document.getElementById("fnameerror");
var pswerror = document.getElementById("pswerror");

function userLogin() {
   
    var valid = isValid();
    if (isValid) {
        location.href="home.html";
    }
}


function isValid() {
    var flag=1;
    if(username != ) {
        fnameerror.innerHTML = "Please register before login";
        flag=0;
    }
    if((userpsw!=) {
        if(flag==1) {
            pswerror.innerHTML = "Wrong password";
            flag=0;
        }
        else {
            pswerror.innerHTML = "Please register before login";
        }
    }

} 
   