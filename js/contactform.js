
function validate(e) {
    console.log("validate");
    e.preventDefault();
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var txt = document.getElementById("txt").value;
    var payload = {
        "name": name,
        "subject":subject,
        "phone": phone,
        "email":email,
        "description":txt,
    };
    console.log(payload);
};

function remaining() {
    len=255;
    current=document.getElementById("txt").value.length;
    document.getElementById("remain").innerHTML= (len - current) + "remaining";
};
