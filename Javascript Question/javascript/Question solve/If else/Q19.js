// 19. Accept a year and check if it is a leap year. 
let years=Number(prompt("enter a leap year:"));
if((years%4 ===0 && years%100!==0)|| years%400===0){
    console.log("Leap year");
}
else{
    console.log("Not leap year");
}