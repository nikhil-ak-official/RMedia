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
var sortDirection = {};
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
    
    if(configTable[i].sortable) {
      let columnName = configTable[i].field;
      sortDirection[columnName] = "desc"; 
      tableHeader.addEventListener("click", function() {sortTable(columnName)});
    }
   
  }
  
  tableData(responseTable);
}
function tableData(responseTable) {
  var tableBody = null;
 
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
            case "date" :
            case "number": tableData += `<td class="alignRight">${responseTable[i][configTable[j].field]}</td>`;break;
            case "link" : tableData += `<td><a href="">${responseTable[i][configTable[j].field]}</a></td>`;break;
            case "button" : tableData += `<td class="apply-btn"><button onClick="buttonClick()">${responseTable[i][configTable[j].field]}</button></td>`;break;
            default : tableData += `<td class="alignLeft">${responseTable[i][configTable[j].field]}</td>`;break;
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
function sortTable(columnName) {
 
  clearTable();
  if(sortDirection[columnName] == "desc") {
    sortDirection[columnName] = "asc";
    responseTable = responseTable.sort((r1,r2) => {
      return r1[columnName] > r2[columnName] ? 1 : -1
    })
    console.log(columnName,sortDirection[columnName]);
  }
  else if (sortDirection[columnName] == "asc") {
    sortDirection[columnName] = "desc";
    responseTable = responseTable.sort((r1,r2) => {
      return r1[columnName] < r2[columnName] ? 1 : -1
    })
    console.log(columnName,sortDirection[columnName]);

  }
  tableData(responseTable);
  for(i in sortDirection) {
    console.log(i);
  }
}

 