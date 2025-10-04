let panelbottom = document.querySelector('.panel-bottom');
let timebox=document.querySelector('.time .box')
let hitbox=document.querySelector('.hit .box');
let scoreBox=document.querySelector('.score .box');


let score=0;
let timerValue=60;
let interval;
let hitRandom;


function makebubble(){

let bubble = '';

for (let i = 0; i <= 132; i++) {
    let randomBubble = Math.floor(Math.random() * 10);
    bubble += `<div class="bubble">${randomBubble}</div>`;
}

panelbottom.innerHTML = bubble;
}

function timer(){
    interval=setInterval(function(){
        if(timerValue>0){
            timerValue--
            timebox.innerHTML=timerValue
        }
        else{
            clearInterval(interval)
            panelbottom.innerHTML="<h1>Game Over !</h1>" 
        }
    },1000)
}
function randomhit(){
    hitRandom=Math.floor(Math.random()*10)
    hitbox.innerHTML=hitRandom
}
panelbottom.addEventListener('click',(e)=>{
    if(e.target.classList.contains("bubble")){
        let bubble=Number(e.target.innerHTML)
        if(bubble===hitRandom){
            score+=10
            scoreBox.innerHTML=score
            makebubble()
            randomhit()
        }
        else{
            score-=5
            if(score<0)score=0
            scoreBox.innerHTML=score
        }
    }
})
randomhit()
timer()
makebubble()