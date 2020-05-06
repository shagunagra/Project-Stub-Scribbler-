function cross(){
    document.getElementById('id01').style.display='none';
}


function openup(){
    document.getElementById('id01').style.display='block';
}


var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


