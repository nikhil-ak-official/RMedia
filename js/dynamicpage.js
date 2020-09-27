function getdata(jsonpath,contentId,imageId) {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
      console.log(this.responseText);
      if (this.readyState == 4 && this.status == 200) {
      
        var dynamic = JSON.parse(this.responseText);
        var home = dynamic.home;
        getHome(home,contentId,imageId);
      }
    }
    http.open("GET",jsonpath, true);
    http.send();
  };
function getHome(home,content,image) {
  var newDiv = document.getElementById(content);
  var imgDiv = document.getElementById(image);
  imgDiv.innerHTML = '<img class="content-img" src=' + home.image + '>';
  var head = document.createElement("h2");
  head.innerHTML = home.title;
  newDiv.appendChild(head);
  var para = newDiv.appendChild(document.createElement("p"));
  var content = home.content;
  var content2 = home.content2; 
  if (content.length + content2.length >100) {
    var span1 = para.appendChild(document.createElement("span"));
    var dots = para.appendChild(document.createElement("span"));
    var span2 = para.appendChild(document.createElement("span"));
    dots.setAttribute("id","dot");
    span2.setAttribute("id","more");
    span1.innerHTML = content.substring(0,100);
    dots.innerHTML = "...";
    span2.innerHTML = content.substring(100,content.length)+'<br><br>' + content2;
    span2.classList.add("display");
    
    var read = document.createElement("button");
    read.innerHTML = "Read More";
    newDiv.appendChild(read);
    read.setAttribute("id","readall");
    read.setAttribute("onclick","readMore()");
  }
  else {
    var span = para.appendChild(document.createElement("span"));
    span.innerHTML = content + '<br><br>' + content2 ;
  }
};
  var flag=0;
  function readMore() {
    if(flag==0) {
      console.log("got in");
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
  };