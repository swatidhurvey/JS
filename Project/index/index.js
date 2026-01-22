// let pass=document.getElementById("password");
// let msg=document.getElementById("message");
// let str=document.getElementById("strength");
// pass.addEventListener('input',()=>{
//     if(pass.value.length>0){
//         msg.style.display="block";
//     }
//     else{
//         msg.style.display="none";
//     }
//     if(pass.value.length<4){
//         str.innerHTML="weak";
//         pass.style.borderColor="#ff5925"
//          pass.style.color="#ff5925";
//     }
//      else if(pass.value.length>=4 && pass.value.length<8){
//         str.innerHTML="medium";
//         pass.style.borderColor="#ff5";
//           pass.style.color="#ff5";
//     }
// else if(pass.value.length>=8){
//     str.innerHtml="strong";
//     pass.style.borderColor="#26d730";
//     msg.style.color="#26d730";
// }

// })


// let pass = document.getElementById("password");
// let msg = document.getElementById("message");
// let str = document.getElementById("strength");
// let toggle = document.getElementById("togglePass");

// // Password Strength Checker
// pass.addEventListener('input', () => {

//     if (pass.value.length > 0) {
//         msg.style.display = "block";
//     } else {
//         msg.style.display = "none";
//     }

//     if (pass.value.length < 4) {
//         str.innerHTML = "Weak";
//         pass.style.borderColor = "#ff5925";
//         str.style.color = "#ff5925";

//     } else if (pass.value.length >= 4 && pass.value.length < 8) {
//         str.innerHTML = "Medium";
//         pass.style.borderColor = "#ff5";
//         str.style.color = "#ff5";

//     } else if (pass.value.length >= 8) {
//         str.innerHTML = "Strong";   // ✔ Fixed (innerHTML was wrong earlier)
//         pass.style.borderColor = "#26d730";
//         str.style.color = "#26d730";
//     }
// });

// // Show / Hide Password
// toggle.addEventListener('change', () => {
//     if (toggle.checked) {
//         pass.type = "text";
//     } else {
//         pass.type = "password";
//     }
// });



let pass = document.getElementById("password");
let toggleBtn = document.getElementById("toggleBtn");
let eyeIcon = document.getElementById("eyeIcon");
let msg = document.getElementById("message");
let str = document.getElementById("strength");

// Show / Hide Password Toggle
toggleBtn.addEventListener("click", (e) => {
    e.preventDefault(); // button click से form submit नहीं होगा

    if (pass.type === "password") {
        pass.type = "text";                 // password दिखाई देगा
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        pass.type = "password";             // password छुप जाएगा
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
});

// Password Strength Checker
pass.addEventListener('input', () => {

    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

    if (pass.value.length < 4) {
        str.innerHTML = "Weak";
        pass.style.borderColor = "#ff5925";
        str.style.color = "#ff5925";

    } else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "Medium";
        pass.style.borderColor = "#fffa65";
        str.style.color = "#fffa65";

    } else if (pass.value.length >= 8) {
        str.innerHTML = "Strong";
        pass.style.borderColor = "#26d730";
        str.style.color = "#26d730";
    }
});

