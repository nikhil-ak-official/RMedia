
/* menu */
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    console.log(this.responseText);
    if (this.readyState == 4 && this.status == 200) {
      var menuobj = JSON.parse(this.responseText);
      getMe(menuobj.menu,"left-ul");
    }
  };
  xmlhttp.open("GET", "json/menu.json", true);
  xmlhttp.send();
  function getMe(menu, elementid) {
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
        document.getElementById(elementid).innerHTML = out;
    };



