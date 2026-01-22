let buble=document.querySelector("#buble")
let img=document.querySelector('.img')
let on=document.querySelector(".on")
let of=document.querySelector(".of")
 let current=0;
 on.addEventListener("click",()=>{
    current=(current+1)%colors.length;
    current.style.backgroundColor='yellow'
    buble.style.filter=`drop-shodow(0 0 40px ${colors[current]})`;
 })