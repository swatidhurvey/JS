// let step=document.querySelectorAll(".step");
// let nextBtn=document.querySelector("#next");
// let prevBtn=document.querySelector("#prev");

// let currentStep=1;
// nextBtn.addEventListener('click',()=>{
//     if(currentStep<steps.length){
//         step[currentStep].classList.add("achive");
//         currentStep++;
//     }
// });
// prevBtn.addEventListener('click',()=>{ 
//     if(currentStep>1){
//         currentStep--;
//         step[currentStep].classList.remove("achive");
//     }
// });
       



let steps = document.querySelectorAll(".step");
let progressFill = document.getElementById("progress-fill");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

let currentStep = 1; // Start from the second step (0 is already achieved)

function updateSteps() {
  steps.forEach((step, index) => {
    if (index < currentStep) {
      step.classList.add("achive");
    } else {
      step.classList.remove("achive");
    }
  });

  prevBtn.disabled = currentStep === 1;
  nextBtn.disabled = currentStep === steps.length;
}

nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length) {
    currentStep++;
    updateSteps();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    updateSteps();
  }
});

updateSteps(); // Initialize on load

 

// let steps = document.querySelectorAll(".step");
// let progressFill = document.getElementById("progress-fill");

// let nextBtn = document.getElementById("next");
// let prevBtn = document.getElementById("prev");

// let currentStep = 1;

// function updateProgress() {
//   // Update step circles
//   steps.forEach((step, index) => {
//     if (index < currentStep) {
//       step.classList.add("achieve");
//     } else {
//       step.classList.remove("achieve");
//     }
//   });

//   // Update progress line fill
//   let progressPercent = ((currentStep - 1) / (steps.length - 1)) * 100;
//   progressFill.style.width = `${progressPercent}%`;

//   // Enable/disable buttons
//   prevBtn.disabled = currentStep === 1;
//   nextBtn.disabled = currentStep === steps.length;
// }

// nextBtn.addEventListener("click", () => {
//   if (currentStep < steps.length) {
//     currentStep++;
//     updateProgress();
//   }
// });

// prevBtn.addEventListener("click", () => {
//   if (currentStep > 1) {
//     currentStep--;
//     updateProgress();
//   }
// });

// updateProgress(); // Initialize on page load

