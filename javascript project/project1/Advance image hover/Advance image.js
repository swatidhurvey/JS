let box=document.querySelectorAll('.box')
// let image=document.querySelectorAll('img')
box.forEach(function(value){
    value.addEventListener('mouseenter',()=>{
        // value.style.backgroundColor='red'
       value.childNodes[3].style.opacity='1'
        value.style.cursor='pointer '
    })
    value.addEventListener('mouseleave',()=>{
        // value.style.backgroundcolor='transparent'
        value.childNodes[3].style.opacity='0'

    })
    value.addEventListener('mousemove',(dets)=>{
         value.childNodes[3].style.top=dets.y+'px'
        value.childNodes[3].style.left=dets.x+'px'
        
    })
})
//---------------------------------------------------- 
// image.forEach(function(value){
//     value.addEventListener('mouseenter',()=>{
//         value.style.opacity='0.5'
//         // value.style.left=dets.x+'px'
//         // value.style.top=dets.y+'px'
//     })
//   value.addEventListener('mouseleave',()=>{
//     value.style.opacity='10'
//   })
//   value.addEventListener('mousemove',(dets)=>{
//     value.style.left=dets.x+'px'
//     value.style.top=dets.y+'px'
//   })
// })
