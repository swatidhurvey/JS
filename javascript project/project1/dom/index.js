//  let h1=document.querySelector('h1')
//  h1.textContent='hello'
//  h1.style.color='red'
//  console.dir(h1);
//   let swati=document.querySelector('body').append('swati')

// let h1=document.querySelector('h1');
// h1.addEventListener('dblclick',function(){
//     h1.style.color='red';
// }) 

// let h1=document.querySelector('h1');
// function dblclick(){
//     h1.style.color='green';
// }
// h1.addEventListener('dblclick',dblclick);
// h1.removeEventListener('dblclick',dblclick);



// let input=document.querySelector('input');
// input.addEventListener('input',function(dets){
//     // console.log('typed')
//     // console.log(data.evt)
//     // console.log(dets)
//     if(dets.data !==null){
//         console.log(dets.data)    
//     }
// })



let h1=document.querySelector('h1');
window.addEventListener('keydown',function(dets){
    if(dets.key === ''){
      h1.textContent = 'spc';
    }
    else{
   h1.textContent = dets.key;
    }
//   
// h1.textContent=dets.key;
// console.log(dets)
})