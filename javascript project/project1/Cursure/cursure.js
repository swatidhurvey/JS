let main=document.querySelector('main')
let cursore=document.querySelector('.cursore')
main.addEventListener('mousemove',(dets)=>{
   cursore.style.left=dets.x+'px';
   cursore.style.top=dets.y+'px';
   console.log(dets)
})
main.addEventListener('mouseleave',()=>{
    cursore.style.opacity=0;
})
main.addEventListener('mouseenter',()=>{
    cursore.style.opacity=1;
})