function logOut() {
    localStorage.removeItem("currentUser");
    location.href = "login.html";
}


document.getElementById("logout").addEventListener("click",logOut);
