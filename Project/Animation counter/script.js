// let count = 5;

// let num = document.querySelector(".number");
// let interval = setInterval(()=>{
//     count--;
//     if(count>=0){
//         num.textContent = count;
//     }
//     num.textContent = "Go!"
//     num.style.color = "lightgreen"
//     clearInterval(interval)

// },1000)


let count = 5;
let num = document.querySelector(".number");

let interval = setInterval(() => {
    if (count > 0) {
        num.textContent = count;
        count--;
    } else {
        num.textContent = "Go!";
        num.style.color = "lightgreen";
        clearInterval(interval);
    }
}, 1000);
