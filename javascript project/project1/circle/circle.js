const circle=document.querySelector('.circle');
let currentRotation=0;

function animationRotation(){
    currentRotation +=10000;
    circle.style.transform=`rotate(${currentRotation}deg)`;
    requestAnimationFrame(animationRotation);
}
animationRotation();