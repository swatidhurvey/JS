let icon=document.querySelector('#icon')
let heart=document.querySelector('#heart')
icon.addEventListener('click',()=>{
    icon.style.color='red'
    heart.style.removed='opacity'
    heart.style.color='white'
    heart.style.opacity='0.8'
    heart.style.transition='all ease 1s'
})