//8. Accept principal, rate, and time. Calculate compound interest using Math.pow().
let principal=Number(prompt("enter principal amount:"))
let rate=Number(prompt("enter rate:")) ;
let time=Number(prompt("enter time:"));
let CI = principal*Math.pow((1+rate/100),time)-principal;
console.log("Compound Interest="+CI);
