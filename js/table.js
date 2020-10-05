/* table */
var responseTable = null;
var configTable = null;
function loadTable(datapath,configpath) {
  getData(datapath,function(response) {
    if(response) {
      responseTable = response.table;
      loadTableConfig(configpath);
    }
  });
}
function loadTableConfig(configpath) {
  getData(configpath,function(response) {
    if(response) {
      configTable = response.config;
      generateTable();
    }
  });
}
var myTable;
function generateTable() {
  myTable = document.getElementsByTagName("table")[0];
  var tableHead = document.createElement("thead");
  myTable.appendChild(tableHead);
  var headRow = document.createElement("tr");
  tableHead.appendChild(headRow);
  for(var i=0;i<configTable.length;i++) {
    var th = configTable[i].header;
    var tableHeader = document.createElement("th");
    tableHeader.innerHTML = th;
    headRow.appendChild(tableHeader);
    columnName = configTable[i].field;
    if(configTable[i].sortable) {
      tableHeader.addEventListener("click", function() {
        console.log(columnName);
        responseTable = responseTable.sort(function(r1,r2) {
          if(r1.columnName > r2.columnName) {
            return 1;
          }
          else {
            return -1;
          }
        }) 
        console.log(responseTable);
        tableData(responseTable);
      })
    }
   
  }
  
  tableData(responseTable);
}
function tableData(responseTable) {
  var tableBody = null;
  clearTable();
  tableBody = document.createElement("tbody");
 
  myTable.appendChild(tableBody);
  tableBody.innerHTML = "";
  for (var i=0;i<responseTable.length;i++) {
    var trow = document.createElement("tr");
    tableBody.appendChild(trow);
    var tableData = "";
    for(var j=0;j<configTable.length;j++) {
      if((responseTable[i][configTable[j].field]!=="") && (responseTable[i][configTable[j].field]!==null)) {
        switch(configTable[j].typeof) {
            // case "date" : tableData += `<td>${new Date(responseTable[i][configTable[j].field])}</td>`;break;
            case "link" : tableData += `<td><a href="">${responseTable[i][configTable[j].field]}</a></td>`;break;
            case "button" : tableData += `<td class="apply-btn"><button onClick="buttonClick()">${responseTable[i][configTable[j].field]}</button></td>`;break;
            default : tableData += `<td>${responseTable[i][configTable[j].field]}</td>`;break;
          }
        }
        else {
          tableData += `<td>"-"</td>`;
        }
      }
      trow.innerHTML = tableData;
    }
}


/* ALERT on click */
function buttonClick() {
   alert("you clicked the button");
}

function clearTable(){
  (document.getElementsByTagName("table")[0]).removeChild(document.getElementsByTagName("tbody")[0]);
  console.log(document.getElementsByTagName("table")[0]);

}
 