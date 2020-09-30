/* table header */

function loadTable() {
  getData("json/tableheader.json",function(response) {
    if(response) {
      getTableHead(response.tableheader);
    }
  });
}
function getTableHead(tableheader) {
  console.log("inside getme");
  var out = "";
  var i;
  for(i = 0; i < tableheader.length; i++) {
    out += '<th>'+ tableheader[i] + '</th>'
  }
  document.getElementById("thead").innerHTML = out;
};

loadTable();