
var fname;
var lname ;
var uname;
var psw;
var pswc ;
var dob;
var gender;
var fnameerror=document.getElementById("fnameerror");
var lnameerror=document.getElementById("lnameerror");
var gendererror = document.getElementById("gendererror"); 
var tcerror = document.getElementById("tcerror"); 
var pswerror = document.getElementById("pswerror");
var current = new Date();
console.log(current);
function submitForm(e) {
    e.preventDefault();
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    uname = document.getElementById("uname").value;
    psw = document.getElementById("psw").value;
    pswc = document.getElementById("pswc").value;
    dob = document.getElementById("dob").value;
    var isValid = validate();
    if (isValid) {
        let userlist = {"firstname": fname,"lastname": lname,"username": uname,"password":psw,"dob":dob,"gender":gender};
        localStorage.setItem("users",JSON.stringify(userlist));
        popUp();
    } 
    
    return false;
}

function validate() {
    
    let flag = 1;
    var letters = /^[A-Za-z\s]+$/;
    if (fname==null || fname=="") {
        fnameerror.innerHTML="Please fill out this field";
        flag=0;
    }
    else if(!fname.match(letters)) {
        fnameerror.innerHTML="Please enter a valid name";
        flag=0;
    }
    if (lname==null || lname=="") {
        lnameerror.innerHTML="Please fill out this field";
        flag=0;
    }
    else if(!lname.match(letters))  {
        lnameerror.innerHTML="Please enter a valid name";
        flag=0;
    } 
    var alphanumeric = /^[A-Za-z0-9\s]+$/;
    if (uname==null || uname=="") {
        unameerror.innerHTML="Please fill out this field";
        flag=0;
    }
    else if(!uname.match(alphanumeric)) {
        unameerror.innerHTML="Please enter a valid name";
        flag=0;
    }
    if (!dob) {
        doberror.innerHTML = "Please enter DOB";
        flag=0;
    }
    if(new Date(dob)>=current) {
        doberror.innerHTML = "Please enter valid dob";
        flag=0;
    }

    let genderlist = document.getElementsByName('gender');
    for(var i=0; i<genderlist.length;i++){
        if(genderlist[i].checked == true){
            gender = genderlist[i].value;   
            console.log(gender);
            break;
        }
        else {
            gendererror.innerHTML = "Please check any of the options";
        }
    }    
    if(psw==null || psw=="")  {
        pswerror.innerHTML = "Please fill out this field";
        flag=0;
    }
    if(pswc==null || pswc=="")  {
        pswcerror.innerHTML = "Please fill out this field";
        flag=0;
    }

    if(psw!=pswc) {
        pswcerror.innerHTML = "Please enter matching password";
        flag=0;
    }
    let terms = document.getElementById('tc');
    if (terms.checked==false) {
        tcerror.innerHTML = "Please check the option";
        flag=0;  
    }
    if(flag==0) {
        return false
    }
    else {
        return true;
    }
    
}

    
function popUp() {
    document.getElementsByClassName("popup")[0].style.display="block";
}