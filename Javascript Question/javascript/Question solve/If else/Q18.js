// 18. Accept three numbers and print the greatest one.
let num1=Number(prompt("enter first number:"));
let num2=Number(prompt("enter second number:"));
let num3=Number(prompt("enter third number:"));
if(num1>=num2 && num1>=num3){
    console.log("num1 is a greatest number");
}
else if(num2>=num1 && num2>=num3)
{
    console.log("num2 is a greatest number");
}
else{
    console.log("num3 is a greatest number");
}