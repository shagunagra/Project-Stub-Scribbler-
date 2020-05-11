
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



function removeElement(elementId) {
  var element = document.getElementsByClassName(elementId);
  element.parentNode.removeChild(element);
}
