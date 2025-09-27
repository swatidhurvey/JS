let btn=document.querySelector("button")
let box=document.querySelector("#box")
btn.addEventListener('click',()=>{
    let r=Math.floor(Math.random() *100)
  let g=Math.floor(Math.random()*100)
  let b=Math.floor(Math.random()*100)
  box.style.backgroundColor=`rgb(${r},${g},${b})`;  
})