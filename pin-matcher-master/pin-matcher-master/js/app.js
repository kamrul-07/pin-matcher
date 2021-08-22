function getpin(){
    const pin =Math.round(Math.random() * 10000);
    const pinString =pin + '';
    if(pinString.length ==4){
        return pin;
    }
    else{
        return getpin()
    }
}
function generatePin(){
    const pin = getpin();
    document.getElementById('display-pin').value=pin;
}


// calculate operate 1
document.getElementById('key-pad').addEventListener('click',function (event) {
    debugger;
   const number=event.target.innerText;
    const calcInput =document.getElementById('typed-numbers');
   if(isNaN(number)){
       if(number == 'C'){
           calcInput.value = '';
       }
   }
   else{
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value=newNumber;
   }
});

// third part 

document.getElementById('submit-btn').addEventListener('click',function(){
    const w =document.getElementById('display-pin');
    const h=document.getElementById('typed-numbers');
    const e=document.getElementById('error')
    const s=document.getElementById('success')

    if(w==h) {
        s.style.display="block"
        e.style.display="none"
    }
    else{
        s.style.display="none"
        e.style.display="block"
        const wrongsignal = document.getElementById('try-left');
        wrongsignal.innerText =parseFloat(wrongsignal.innerText) - 1;
        if(wrongsignal.innerText == 0 || w.value==h.value ){
         document.getElementById('submit-btn').disabled = true;
         const p=document.getElementById('k');
         p.style.display="none";
        }
    }
})

 