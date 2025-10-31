// let form=document.getElementById("smartForm");
// let username=document.getElementById("username");
// let email=document.getElementById("email");
// let password=document.getEletlementById("password");

// let usernameTooltip=document.getElementById("usernameTooltip");
// let emailTooltip=document.getElementById("emailTooptip");
// let passwordTooptip=document.getElementById("passwordTooptip");
// let strengthLevel=document.getElementById("strengthLevel");
//  username.addEventListener("input",()=>{
//     if(username.value.trim().length<3){
//         username.classList.add("invalid");
//         usernameTooltip.style.display="none";
//     }
//  });
  
// email.addEventListener("input",()=>{
//    let emailpattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//    if(!emailpattern.test(email.value.trim())){
//       email.classList.add("invalid");
//       emailTooltip.style.display="block";
//    }else{
//       email.classList.remove("invalid");
//       emailTooltip.style.display="none";
//    }
// });

//  password.addEventListener("input",()=>{
//    let val=password.value;
//    let strength=0;

//    if(val.length>=6)strength++;
//    if(/[A-Z]/.test(val))strength++;
//    if(/[0-9]/.test(val))strength++;
//    if(/[^A-Za-z0-9]/.test(val))strength++;
// strength.style.width=${strength*25}%;  

//  if(strength<=1)strengthLevel.style.backgroundColor="red";
//  else if(strength===2)
//  strengthLevel.style.backgroundColor="#orange";
//  else if(strength===3)
// strengthLevel.style.backgroundColor="#cddc39";
// else strengthLevel.style.backgroundColor="green";

// if(strength<3){
//     password.classList.add("invalid");
//   passwordTooptip.style.display="none";
// }else{
//    password.classList.add("invalid");
//     passwordTooptip.style.display="none"; 
// }
// });
// form.addEventListener("submit",(e)=>{
//  e.preventDefault();
//  if(
//     !username.classList.contains("invalid")&&
//     !email.classList.contains("invalid")&&
//     !password.classList.contains("invalid")&&
//     username.value.trim()!==""&&
//     email.value.trim()!==""&&
//     password.value.trim()!==""
//  ){
//     alert("Form submitted successfully!");
//     form.reset();
//     strengthLevel.style.width="0%";
//  }
//  else{
//     alert("please fix the errors before submitting")
//  }
// });




let form = document.getElementById("smartForm");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");

let usernameTooltip = document.getElementById("usernameTooltip");
let emailTooltip = document.getElementById("emailTooltip");
let passwordTooltip = document.getElementById("passwordTooltip");
let strengthLevel = document.getElementById("strengthLevel");

// Username validation
username.addEventListener("input", () => {
  if (username.value.trim().length < 3) {
    username.classList.add("invalid");
    usernameTooltip.style.display = "block";
  } else {
    username.classList.remove("invalid");
    usernameTooltip.style.display = "none";
  }
});

// Email validation
email.addEventListener("input", () => {
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    email.classList.add("invalid");
    emailTooltip.style.display = "block";
  } else {
    email.classList.remove("invalid");
    emailTooltip.style.display = "none";
  }
});

// Password strength
password.addEventListener("input", () => {
  let val = password.value;
  let strength = 0;

  if (val.length >= 6) strength++;
  if (/[A-Z]/.test(val)) strength++;
  if (/[0-9]/.test(val)) strength++;
  if (/[^A-Za-z0-9]/.test(val)) strength++;

  strengthLevel.style.width = `${strength * 25}%`;

  if (strength <= 1) {
    strengthLevel.style.backgroundColor = "red";
  } else if (strength === 2) {
    strengthLevel.style.backgroundColor = "orange";
  } else if (strength === 3) {
    strengthLevel.style.backgroundColor = "#cddc39";
  } else {
    strengthLevel.style.backgroundColor = "green";
  }

  if (strength < 3) {
    password.classList.add("invalid");
    passwordTooltip.style.display = "block";
  } else {
    password.classList.remove("invalid");
    passwordTooltip.style.display = "none";
  }
});

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    !username.classList.contains("invalid") &&
    !email.classList.contains("invalid") &&
    !password.classList.contains("invalid") &&
    username.value.trim() !== "" &&
    email.value.trim() !== "" &&
    password.value.trim() !== ""
  ) {
    alert("Form submitted successfully!");
    form.reset();
    strengthLevel.style.width = "0%";
    strengthLevel.style.backgroundColor = "transparent";
  } else {
    alert("Please fix the errors before submitting.");
  }
});

