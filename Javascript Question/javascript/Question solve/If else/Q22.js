//   22. Accept a character and check if it is a vowel or consonant. 
let char=prompt("enter a latter:").toLocaleLowerCase();
if("aeiou".includes(char)){
    console.log("Vowel");
}
else if(char>='a'&& char<='z'){
    console.log("Constant");
}
else{
    console.log("Not a valid latter");
}