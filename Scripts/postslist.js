
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

function onDeletePost(){
  document.getElementById('deletePost').style.display='block';
}


function onCloseDeleteClicked() {
  document.getElementById('deletePost').style.display='none';
}

function removeElement(btnstate) {
  var divs= document.getElementById('post1');
  divs.parentNode.removeChild(divs);
}

function removeElement(btnstate) {
  var divs= document.getElementById('post2');
  divs.parentNode.removeChild(divs);
}

function removeElement(btnstate) {
  var divs= document.getElementById('post3');
  divs.parentNode.removeChild(divs);
}

function removeElement(btnstate) {
  var divs= document.getElementById('post4');
  divs.parentNode.removeChild(divs);
}

function removeElement(btnstate) {
  var divs= document.getElementById('post5');
  divs.parentNode.removeChild(divs);
}
