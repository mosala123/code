// plus and mins 
const toggle = document.getElementById('toggle');
const content = document.getElementById('content');


toggle.addEventListener('click', function(){

if(content.style.display==="none"){
    content.style.display="block";
    toggle.classList.remove('fa-plus');
    toggle.classList.add('fa-minus');

}
else{
    content.style.display="none";
    toggle.classList.remove('fa-mins');
    toggle.classList.add('fa-plus');

}

});










 