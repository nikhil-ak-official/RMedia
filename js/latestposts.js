/* latest posts*/

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    console.log(this.responseText);
    if (this.readyState == 4 && this.status == 200) {
      var post = JSON.parse(this.responseText);
      getPost(post.latestposts);
    }
  };
  xmlhttp.open("GET", "json/post.json", true);
  xmlhttp.send();
  function getPost(latestposts) {
      console.log("inside getme");
      var out = "";
      var i;
      for(i = 0; i < latestposts.length; i++) {
          out += '<li><a href=' + latestposts[i].gotourl + '><img src=' 
          + latestposts[i].imageurl + '></a></li>';
        }
        document.getElementById("right-ul").innerHTML = out;
    };
