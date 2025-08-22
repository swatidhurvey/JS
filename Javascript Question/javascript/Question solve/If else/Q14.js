// 14. Handle invalid gender input and show appropriate message.
let gender=prompt("enter gender(M/m) (F/f)");
if(gender === 'M'|| gender==='m'){
    console.log("Hello Sir");
}
else if(gender ==='F'||gender==='f'){
    console.log("Hello mem");
}
else{
    console.log("Invalid gender input.");
}