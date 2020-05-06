var modalA = document.getElementById('id01');

var modal = document.getElementById('id02');

var modalB = document.getElementById('id03');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } 
  if(event.target == modalA) {
        modalA.style.display = "none";      
     }
  if(event.target == modalB) {
        modalB.style.display = "none";      
     }
}
