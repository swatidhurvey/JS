//  20. Apply shop discount logic (based on conditions like price/quantity). 
//  let price=1200;
//  let discount=0;


// let price=Number(prompt("enter your price:"));
// //   let discount=Number(prompt("enter you discount"));
// let discount=0;
//  if(price>1000  && price>600){
//     discount=0.20;
//    Totaldiscount=price*discount/100;
//     price-Totaldiscount;
//  }
//  else if(price>500 && price>100){
//     discount=0.10;
//     Totaldiscount=price*discount/100;
//     price-Totaldiscount;
//  }
//  else if(price>50 && price>10){
//      discount=0;
//     console.log("No discount");
//  }
//  let finalprice=price-discount;
//  console.log("original price: "+price);
//  console.log("discount="+discount);
//  console.log("Final price to pay=" + finalprice);
   let price=Number(prompt("enter your price:"));
   let finaldiscount=0;
   if(price>0 && price<=2000){
      finaldiscount +=0;
   }
   if(price>2000){
      let checkprice = Math.min(price,5000)-2000;
      finaldiscount +=checkprice*0.05;
      }
      if(price>5000){ 
         let checkprice=Math.min(price,10000)-500;
         finaldiscount +=checkprice*0.10;
      }
      if(price>10000){
         let checkprice=price-10000;
         finaldiscount +=checkprice*0.20;
      }
      console.log(finaldiscount);
      console.log("final price= "+(price-finaldiscount));