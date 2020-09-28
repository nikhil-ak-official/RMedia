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
