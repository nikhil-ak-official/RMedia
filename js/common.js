
/* menu */
var responseMenu;
function loadMenu() {
  getData( "json/menu.json",function(response) {
    if(response) {
      responseMenu = response.menu;
      getMenu();
    }
  });
}
loadMenu();
function getMenu() {
  var out = "";
  var i;
  for(i = 0; i < responseMenu.length; i++) {
      if (responseMenu[i].notfound == false) {
          out += '<li><a href=' + responseMenu[i].goto + '>' + 
          responseMenu[i].name + '</a></li>';
          getTitle(responseMenu[i]);
        }
        else if (responseMenu[i].notfound == true) {
            out += '<li><a href=' + "error.html" + '>' + 
            responseMenu[i].name + '</a></li>';
        }      
        }
    document.getElementById("left-ul").innerHTML = out;
}

/* title dynamic */
function getTitle(menuobj) {
    if(location.pathname.indexOf(menuobj.goto)!==-1) {
      document.getElementById('title').innerHTML= menuobj.name;
      
    }
}


/* latest posts*/
function loadPost() {
  getData("json/latestposts.json",function(response) {
    if(response) {
      getPost(response.latestpost);
    }
  });
}
function getPost(latestposts) {
  var out = "";
  var i;
  for(i = 0; i < latestposts.length; i++) {
    if(responseMenu[i].name == latestposts[i].id) {
      var posts = latestposts[i].posts;
      for(i=0; i<posts.length; i++) {
        out += '<li><a href=' + posts[i].gotourl + '><img src=' 
        + posts[i].imageurl + '></a></li>';
      }
    }
  }
    document.getElementById("right-ul").innerHTML = out;
}
loadPost();





/* commonCall */
function getData(jsonpath,fnt) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      fnt(JSON.parse(this.responseText));
    }
    else {
      fnt(false);
    }
  }
  xmlhttp.open("GET", jsonpath, true);
  xmlhttp.send();
}


/*hi username */
function getName() {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if(currentUser) {
    let lname = currentUser.lname;
    let fname = currentUser.fname;
    let head = document.getElementById("searchbox");
    let newdiv = document.createElement("div");
    head.appendChild(newdiv);
    let para = document.createElement("p");
    para.innerHTML = "Hi" + " " + fname + " " + lname + "<button id='logout'>Logout</button>";
    newdiv.appendChild(para);
    // div.setAttribute("class","subHead");
  }
  
};
getName();



 
  



     
 


    
   

