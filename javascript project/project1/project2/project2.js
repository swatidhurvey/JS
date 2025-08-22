let box=document.querySelector('#box')
let h1=document.querySelector('h1')
let p=document.querySelector('p')
let btn=document.querySelector('button')
let count=0;
btn.addEventListener('click',()=>{
    if(count===0){
        box.style.backgroundColor='violet'
        h1.style.color='crimson'
        h1.innerHTML+='HELLO'
        p.style.color='white'
        btn.style.backgroundColor='skyblue'
        btn.style.color='blue'
        count++;
    }
    else{
        box.style.backgroundColor='orange'
        h1.style.color='yellow'
        h1.innerHTML+='BYE'
        p.style.color='indigo'
        btn.style.color='white'
        btn.style.backgroundColor='red'
        count++;
    }
})