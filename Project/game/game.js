// let main=document.querySelector('main');
// let colors=['#e74c3c','#8c44ad','#3498db','#c6563','#c34269'];

// let boxes=250;
// for(let i=0;i<256;i++){
//     let box=document.createElement('div')
//     box.classList.add('box')

//     box.addEventListener('mouseover',()=>setColor(box) )
//     box.addEventListener('mouseout',()=>removeColor(box))
//      main.appendChild(box)
// }
// function setColor(elam){
//     let color=getRandomColor()
//     elam.style.backgrond=color
//     elam.style.boxShadow=` 0 0 2px ${color},0 0 10px ${color}`
// }
// function remove(elem){
// elem.style.backgrond='#1d1d1d'
// elem.style.boxShadow='0 0 2px #000'
// }
// function getRandomColor(){
//     return colors[Math.floor(Math.random()*colors.length)]
// }


// let main = document.querySelector('main');
// let colors = ['#e74c3c', '#8c44ad', '#3498db', '#e6563c', '#c34269',"#ff4757",
//     "#70a1ff",
//     "#2ed573",
//     "#ffa502",
//     "#e84393",
//     "#1e90ff",
//     "#7bed9f",
//     "#ff6b81"];

// for (let i = 0; i < 256; i++) {
//     let box = document.createElement('div');
//     box.classList.add('box');

//     box.addEventListener('mouseover', () => setColor(box));
//     box.addEventListener('mouseout', () => removeColor(box));

//     main.appendChild(box);
// }

// function setColor(elem) {
//     let color = getRandomColor();
//     elem.style.background = color;              // ✔ corrected
//     elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
// }

// function removeColor(elem) {
//     elem.style.background = '#1d1d1d';          // ✔ corrected
//     elem.style.boxShadow = '0 0 2px #000';
// }

// function getRandomColor() {
//     return colors[Math.floor(Math.random() * colors.length)];
// }



let main = document.querySelector('main');

let colors = [
    "#ff4757", "#70a1ff", "#2ed573", "#ffa502",
    "#e84393", "#1e90ff", "#7bed9f", "#ff6b81"
];

for (let i = 0; i < 256; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    main.appendChild(box);

    // हर box के लिए random color change
    setInterval(() => {
        setColor(box);
    }, getRandomSpeed());
}

function setColor(elem) {
    let color = getRandomColor();
    elem.style.background = color;
    elem.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// हर box अलग-अलग speed से रंग बदले
function getRandomSpeed() {
    return Math.floor(Math.random() * 500) + 200;  // 200ms–700ms
}
