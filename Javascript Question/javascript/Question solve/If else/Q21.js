// 1. Accept units and calculate electricity bill based on given slabs. 
 let units=Number(prompt("enter your bill units:"));
 let bill=0;
 if(units<=100){
    bill=0;
 }
 if(units>100 && units<=200){
    bill=9; 
 }
 if( units>200 && units<=300){
    bill=10;
 }
 if(units>300){
    bill=15;
 }
console.log("your electricity bill is="+bill);