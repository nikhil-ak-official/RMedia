
var fname;
var lname ;
var psw;
var pswc ;
var fnameerror=document.getElementById("fnameerror");
var lnameerror=document.getElementById("lnameerror");
var gendererror = document.getElementById("gendererror"); 
var tcerror = document.getElementById("tcerror"); 
var pswerror = document.getElementById("pswerror");

function submit() {
    console.log("submit");
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    psw = document.getElementById("psw").value;
    pswc = document.getElementById("pswc").value;
    var isValid = validate();
    if (isValid) {
        toLogin();
        // let obj = {nam:}
        // localStorage.setItem("user",)
    } 
    return isValid;
}

function validate() {
    console.log("validate");
    var letters = /^[A-Za-z]+$/;
    if (fname==null || name=="") {
        fnameerror.innerHTML="Please fill out this field";
        return false;
    }
    else if(!fname.match(letters)) {
        fnameerror.innerHTML="Please enter a valid name";
        return false;
    }
    if (lname==null || name=="") {
        lnameerror.innerHTML="Please fill out this field";
        return false;
    }
    else if(!(lname.match(letters)))  {
        lnameerror.innerHTML="Please enter a valid name";
        return false;
    } 

    var gender = document.getElementsByName('gender');
    var flag=0;
    for(var i=0; i<gender.length;i++){
        if(gender[i].checked == true){
            flag = 1;    
        }
    } 
    if(flag==0) {
        gendererror.innerHTML = "Please check any of the options";
        return false;
    }    
    if(psw==null || psw=="") {
        pswerror.innerHTML = "Please fill out this field";
        return false;
    }

    if(psw!=pswc) {
        pswcerror.innerHTML = "Please enter matching password";
        return false;
    }
    var terms = document.getElementsByName('tc');
    if (terms.checked==false) {
        tcerror.innerHTML = "Please check the option";
        return false;  
    }
    return true;
}

    
function toLogin() {
    console.log("pop");
    document.getElementsByClassName("popup").style.display="block";
}