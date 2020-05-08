var myInput = document.getElementById("get_pink");
var other = document.getElementById("all_data");
var b1 =  document.getElementById("edit_button");
var b2 =  document.getElementById("save_button");
function borders() {
  if (myInput.style.border == "") {
    myInput.style.border = "3px solid pink";
    other.style.border = "3px solid pink";
    b1.style.visibility = 'hidden';
    b2.style.visibility = 'visible';
    myInput.contentEditable= 'true';
    other.contentEditable= 'true';
  } else {
    myInput.style.border = "";
    other.style.border = "";
    b1.style.visibility = 'visible';
    b2.style.visibility = 'hidden';
    myInput.contentEditable= 'false';
    other.contentEditable= 'false';
  }
}

var p = document.getElementById("count");
var b3 = document.getElementById("likes");
var count = 0;
function thu(){
    count += 1;
    b3.innerHTML= '<i class="fa fa-thumbs-up" aria-hidden="true"></i>' + " Liked";
    p.innerHTML = count + " Person Likes This!";
}


  function adding() {
    var comment= document.getElementById('c_content').value;

    var node = document.createElement("div");
    node.innerHTML ="<br>"
    node.style.backgroundColor="#fff";
    node.style.margin="10px 10px 10px 10px";
    node.style.padding="0 20px 20px 10px";
    var textnode = document.createTextNode(comment);
    node.appendChild(textnode);
    if (comment===""){
        alert("Please add a comment......");
    }
    else{
        var latestComment = document.getElementById("box");
        latestComment.insertBefore(node, latestComment.childNodes[0]); 
    }       
}
var modalA = document.getElementById('id01');

var modal = document.getElementById('id02');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } 
  if(event.target == modalA) {
        modalA.style.display = "none";      
     }
}
