// 16. Accept name and age, and check voter eligibility.
// o If not eligible, show after how many years they can vote.
let name=prompt("enter your name:");
let age=Number("enter your age:");
if(age>=18){
    console.log("${name},You are eligible to vote:");
}
else {
    let yearsLeft = 18-age;
    console.log("${name},you are not eligible to vote. you can vote after ${yearsLeft} year(s).");
}