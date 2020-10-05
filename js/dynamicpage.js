

function loadPage(content,image) {
  getData( "json/dynamicpage.json",function(response) {
    if(response) {
      getHome(response.home,content,image);
    }
  });
}

function getHome(home,content,image) {
  var newDiv = document.getElementById(content);
  var imgDiv = document.getElementById(image);
  imgDiv.innerHTML = '<img class="content-img" src=' + home.image + '>';
  var para = newDiv.appendChild(document.createElement("p"));
  var contents = home.content;
  var content2 = home.content2; 
  if (contents.length + content2.length >100) {
    var span1 = para.appendChild(document.createElement("span"));
    var dots = para.appendChild(document.createElement("span"));
    var span2 = para.appendChild(document.createElement("span"));
    dots.setAttribute("id","dot");
    span2.setAttribute("id","more");
    span1.innerHTML = contents.substring(0,100);
    dots.innerHTML = "...";
    span2.innerHTML = contents.substring(100,contents.length)+'<br><br>'+content2;
    span2.classList.add("display");
    var read = document.createElement("button");
    read.innerHTML = "Read More";
    newDiv.appendChild(read);
    read.setAttribute("id","readall");
    read.setAttribute("onclick","readMore()");
  }
  else {
    var span = para.appendChild(document.createElement("span"));
    span.innerHTML = contents + '<br><br>'+content2 ;
  }
};
var flag=0;
function readMore() {
  if(flag==0) {
    document.getElementById("more").classList.remove("display");
    document.getElementById("dot").classList.add("display");
    document.getElementById("readall").innerHTML="Read Less";
    flag=1;
  }
  else if(flag==1) {
    document.getElementById("more").classList.add("display");
    document.getElementById("dot").classList.remove("display");
    document.getElementById("readall").innerHTML="Read More";
    flag=0;
  }
}
