let part1=document.querySelector('#part1')
let part2=document.querySelector('#part2')
let part3=document.querySelector('#part3')
let part4=document.querySelector('#part4')
let part5=document.querySelector('#part5')

let image1=document.querySelector('#img1')
let image2=document.querySelector('#img2')
let image3=document.querySelector('#img3')
let image4=document.querySelector('#img4')
let image5=document.querySelector('#img5')


part1.addEventListener('mousemove',(dets)=>{
image1.style.left=dets.x+"px"
image1.style.top=dets.y+"px"
})
part1.addEventListener('mouseleave',()=>{
image1.style.opacity='0'
})

part1.addEventListener('mouseenter',()=>{
image1.style.opacity='1'
})

part2.addEventListener('mousemove',(dets)=>{
image2.style.left=dets.x+"px"
image2.style.top=dets.y -180+"px"
})
part2.addEventListener('mouseleave',()=>{
image2.style.opacity='0'
})

part2.addEventListener('mouseenter',()=>{
image2.style.opacity='1'
})

part3.addEventListener('mousemove',(dets)=>{
image3.style.left=dets.x+"px"
image3.style.top=dets.y-300+"px"
})
part3.addEventListener('mouseleave',()=>{
image3.style.opacity='0'
})

part3.addEventListener('mouseenter',()=>{
image1.style.opacity='1'
})

part4.addEventListener('mousemove',(dets)=>{
image4.style.left=dets.x+"px"
image4.style.top=dets.y -395 +"px"
})
part4.addEventListener('mouseleave',()=>{
image4.style.opacity='0'
})

part4.addEventListener('mouseenter',()=>{
image1.style.opacity='1'
})

part5.addEventListener('mousemove',(dets)=>{
image5.style.left=dets.x+"px"
image5.style.top=dets.y- 500+"px"
})
part5.addEventListener('mouseleave',()=>{
image5.style.opacity='0'
})

part5.addEventListener('mouseenter',()=>{
image5.style.opacity='1'
})