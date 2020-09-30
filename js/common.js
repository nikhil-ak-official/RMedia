/* menu */
function loadMenu() {
  getData( "json/menu.json",function(response) {
    if(response) {
      getMe(response.menu);
    }
  });
}
function getMe(menu) {
  console.log("inside getme");
  var out = "";
  var i;
  for(i = 0; i < menu.length; i++) {
      if (menu[i].notfound == false) {
          out += '<li><a href=' + menu[i].goto + '>' + 
          menu[i].name + '</a></li>';
        }
        else if (menu[i].notfound == true) {
            out += '<li><a href=' + "error.html" + '>' + 
            menu[i].name + '</a></li>';
        }      
        }
    document.getElementById("left-ul").innerHTML = out;
};


/* title dynamic */

function loadTitle(id) {
  getData("json/menu.json",function(response) {
    if(response) {
      getTitle(response.menu,id);
    }
  });
}
function getTitle(title,id) {
    console.log("inside getme");
    var i=0;
    for(i = 0; i < title.length; i++) {
        if(id == title[i].id) {
            document.getElementById(id).innerHTML = title[i].name;}
    }
};


/* latest posts*/
function loadPost() {
  getData("json/post.json",function(response) {
    if(response) {
      getPost(response.latestposts);
    }
  });
}
function getPost(latestposts) {
  console.log("inside post");
  var out = "";
  var i;
  for(i = 0; i < latestposts.length; i++) {
      out += '<li><a href=' + latestposts[i].gotourl + '><img src=' 
      + latestposts[i].imageurl + '></a></li>';
    }
    document.getElementById("right-ul").innerHTML = out;
};


/* commonCall */
function getData(jsonpath,fnt) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    console.log(this.responseText);
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






 
  



     
 


    
   

