const body=document.querySelector("body");

const startbtn=document.getElementById('start');
const stopbtn=document.getElementById('stop');
let color="#";

const generateColor=function(){
    const hex="0123456789ABCDEF";
    color=null;
    color="#";
    for(let i=0;i<6;i++){
        color+=hex[parseInt(Math.random()*16)];
    }
    return color;
}


let changColor;
startbtn.addEventListener('click',function(){
    if(!changColor){
        changColor=setInterval(startChangeColor,2000);
    }
    const startChangeColor=function(){
        body.style.backgroundColor=generateColor;
    }    
});

stopbtn.addEventListener('click',function(){
    clearInterval(changColor);
    changColor=null;
});


