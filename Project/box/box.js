let box=document.querySelector("#box");
box.addEventListener('mousemove',()=>{
    box.style.backgroundColor='red';
    box.style.cursor='pointer';
    box.style.scale='2';
     box.style.width=200+'px'
})
box.addEventListener('mouseout',()=>{
    box.style.backgroundColor='yellow';
    box.style.cursor='pointer';
    box.style.scale='1.5'
    box.style.width=30+'px'
})