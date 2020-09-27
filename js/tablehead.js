/* table header */
  
var xmlhttp = new XMLHttpRequest();
   
xmlhttp.onreadystatechange = function() {
    console.log(this.responseText);
    if (this.readyState == 4 && this.status == 200) {
      var tableobj = JSON.parse(this.responseText);
      getTableHead(tableobj.tableheader);
    }
  };
  xmlhttp.open("GET", "json/tableheader.json", true);
  xmlhttp.send();
  
  function getTableHead(tableheader) {
      console.log("inside getme");
      var out = "";
      var i;
      for(i = 0; i < tableheader.length; i++) {
        out += '<th>'+ tableheader[i] + '</th>'
    }
      document.getElementById("thead").innerHTML = out;
    };
