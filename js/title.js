function getTitle(jsonpath,id) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    console.log(this.responseText);
    if (this.readyState == 4 && this.status == 200) {
      var titleobj = JSON.parse(this.responseText);
      titleName(titleobj.menu,id);
    }
  }
  xmlhttp.open("GET", jsonpath, true);
  xmlhttp.send();
};
function titleName(title,id) {
    console.log("inside getme");
    var i=0;
    for(i = 0; i < title.length; i++) {
        if(id == title[i].id) {
            document.getElementById(id).innerHTML = title[i].name;}
    }
};
