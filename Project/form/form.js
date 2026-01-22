//  let form=document.querySelector('form');
// let email=document.querySelector('email');
// let password=document.querySelector('password');

// form.addEventListener("submit",function(dets){
//     dets.preventDefault();
//     let isValid=true;
// })
// if(email){
//     document.querySelector('email').textContent='incorrect'
//     document.querySelector('email').style.display='initial';
//     isValid=false;
// }
// if(password){
//     document.querySelector('password').textContent='incorrect';
//     document.querySelector('password').style.display='initial';
//     isValid=false;
// }
// if(isvalid){
//     document.querySelector('#resultMessage').textContent='this message is correct';
//     isValid=true;  
// }
let form = document.querySelector('form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

let emailError = document.querySelector('#emailError');
let passwordError = document.querySelector('#passwordError');

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Email validation
    if (email.value === "") {
        emailError.textContent = "Email incorrect";
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // Password validation
    if (password.value === "") {
        passwordError.textContent = "Password incorrect";
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    // Final result
    if (isValid) {
        document.querySelector('#resultMessage').textContent =
            "This message is correct";
    }
});
