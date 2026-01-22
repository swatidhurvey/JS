let randomNum=Math.floor(Math.random()*100);
let check = document.querySelector('#check')

let attemp=0;

check.addEventListener('click',function(){
  let guess=Number(document.querySelector("#guess").value)
  console.log(guess)
  let msg=document.querySelector("#message")

  if(guess <1 || guess >100 || isNaN(guess)){
    msg.textContent="Your Guess Number is right"
    return
  }

  attemp++;
  document.querySelector("#attemps").textContent=attemp;

  if(guess===randomNum){
    msg.textContent = "Your Guess Number is righ"
  }

  if(guess>randomNum){
    msg.textContent = "Your Guess Number is  to high"
  }


  if(guess<randomNum){
    msg.textContent = "Your Guess Number is to low"
  }
})
document.querySelector('#restart').addEventListener('click',()=>{
    attemp=0;
   let randomNum=Math.floor(Math.random()*100);
   document.querySelector("#message").textContent=""
   document.querySelector("#guess").value=""
})



