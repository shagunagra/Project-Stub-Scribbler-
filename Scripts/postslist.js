
var modalA = document.getElementById('id01');

var modal = document.getElementById('id02');

var modalC = document.getElementById('deletePost');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } 
  if(event.target == modalA) {
        modalA.style.display = "none";      
     }
  if(event.target == modalC) {
      modalC.style.display = "none";      
     }

}

function onDeletePost(){
  document.getElementById('deletePost').style.display='block';
}


function onCloseDeleteClicked() {
  document.getElementById('deletePost').style.display='none';
}


function removeElement(btnstate) {
  var divs= document.getElementsByClassName('container')[0];
  divs.parentNode.removeChild(divs);
}
