
function validate(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let txt = document.getElementById("txt").value;
    let payload = {
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
