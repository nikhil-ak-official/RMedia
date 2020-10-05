function highlight(event) {
  let content = document.getElementsByClassName("middle-sec")[0];
  var txt = searchTxt.value.toLowerCase();
  if((txt && txt.length>3) && (event.keyCode===13)) {
    searchKey = txt;
    var highlightTxt = new RegExp("("+txt+")", "gi");
    let matches = content.innerHTML.replace(highlightTxt,`<mark>${txt}</mark>`);
    console.log("not null",matches);
    content.innerHTML = matches;
  }
  if((event.keyCode==8) || (txt=="")) {
    console.log(searchKey);
    let matches = content.innerHTML.replace(`<mark>${searchKey}</mark>`,searchKey);
    content.innerHTML = matches;
  }
}
var searchKey;
var searchTxt = document.getElementById("search");
searchTxt.addEventListener("keyup",highlight);
