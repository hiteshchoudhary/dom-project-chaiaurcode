const buttons=document.querySelectorAll('.button');
const body =document.querySelector('body');

buttons.forEach(function(btn) {
    btn.addEventListener('click',function(btn){
        body.style.backgroundColor=btn.target.id;
    });
});