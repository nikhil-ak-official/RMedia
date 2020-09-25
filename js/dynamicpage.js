function getpagedata(jsonpath) {
    var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    console.log(this.responseText);
    if (this.readyState == 4 && this.status == 200) {
      var dynamic = JSON.parse(this.responseText);
      var p = dynamic.pages;
    }
  };
  xmlhttp.open("GET",jsonpath, true);
  xmlhttp.send();
}


