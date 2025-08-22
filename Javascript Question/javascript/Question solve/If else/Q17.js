// 17. Accept day number (1–7) and print corresponding day name.
 let days=Number(prompt("enter days number(1-7)"));
 switch(days){
    case 1:console.log("sunday");break;
    case 2:console.log("Monday");break;
    case 3:console.log("Tuesday");break;
    case 4:console.log("Wednesday");break;
    case 5:console.log("Thusday");break;
    case 6:console.log("Friday");break;
    case 7:console.log("Saturaday");break;
    default:console.log("Invalid day number.Please enter a number between 1 and 7.");
 }