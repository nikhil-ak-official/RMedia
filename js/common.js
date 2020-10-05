
/* menu */
function loadMenu() {
  getData( "json/menu.json",function(response) {
    if(response) {
      getMe(response.menu);
    }
  });
}
function getMe(menu) {
  var out = "";
  var i;
  for(i = 0; i < menu.length; i++) {
      if (menu[i].notfound == false) {
          out += '<li><a href=' + menu[i].goto + '>' + 
          menu[i].name + '</a></li>';
          getTitle(menu[i]);
        }
        else if (menu[i].notfound == true) {
            out += '<li><a href=' + "error.html" + '>' + 
            menu[i].name + '</a></li>';
        }      
        }
    document.getElementById("left-ul").innerHTML = out;
}

/* title dynamic */
function getTitle(menuobj) {
    if(location.pathname.indexOf(menuobj.goto)!==-1) {
      document.getElementById('title').innerHTML= menuobj.name;
      loadPost(menuobj.name);
    }
}


/* latest posts*/
function loadPost(page) {
  getData("json/latestposts.json",function(response) {
    if(response) {
      getPost(response.latestpost,page);
    }
  });
}
function getPost(latestposts,page) {
  var out = "";
  var i;
  for(i = 0; i < latestposts.length; i++) {
    if(page == latestposts[i].id) {
      var posts = latestposts[i].posts;
      for(i=0; i<posts.length; i++) {
        out += '<li><a href=' + posts[i].gotourl + '><img src=' 
        + posts[i].imageurl + '></a></li>';
      }
    }
  }
    document.getElementById("right-ul").innerHTML = out;
}





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
  if(localStorage.getItem("currentUser")) {
    let name = JSON.parse(localStorage.getItem("currentUser"));
    let lname = name.lname;
    let fname = name.fname;
    let head = document.getElementById("searchbox");
    let newdiv = document.createElement("div");
    head.appendChild(newdiv);
    let para = document.createElement("p");
    para.innerHTML = "Hi" + " " + fname + " " + lname + "<button id='logout'>Logout</button>";
    newdiv.appendChild(para);
    // div.setAttribute("class","subHead");
  }
  
};



 
  



     
 


    
   

