const form=document.querySelector('form');

form.addEventListener('submit',function(ele){
    ele.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#results');
    
    if(height<0||height===''||isNaN(height)){
        result.innerHTML="Enter valid height";
    }else if(weight<0||weight===''||isNaN(weight)){
        result.innerHTML='Enter valid weight';
    }else{
        const bmi= (weight/((height*height)/10000)).toFixed(2);
        console.log(bmi);
        result.innerHTML=`BMI = ${bmi}`;
    }
})

