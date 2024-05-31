const input = document.getElementById("number")

const converterBtn = document.getElementById("convert-btn")

const output = document.getElementById("output")

const convertTable = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
  100: "C",
  200: "CC",
  300: "CCC",
  400: "CD",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  900: "CM",
  1000: "M",
  2000: "MM",
  3000: "MMM",
  }




function reminder(){
  if(!input.value){
    output.innerText = "Please enter a valid number";
    return false;
  }else if(input.value == -1 || input.value == 0){
    output.innerText = "Please enter a number greater than or equal to 1";
    return false;
  }else if(input.value >= 4000){
    output.innerText = "Please enter a number less than or equal to 3999";
    return false;
  }else{
    return true;
  }
  
}


function digitSpliter(){
  
  let numStr = input.value.toString();
  let length = numStr.length;
  let result = [];

  if(length === 4){
    let thousands = parseInt(numStr[0]*1000);
    let hundreds = parseInt(numStr[1]*100);
    let tens = parseInt(numStr[2]*10);
    let ones = parseInt(numStr[3]);
    result.push(thousands, hundreds, tens, ones)
    console.log(result)
    compareTable(result, convertTable)
   }else if(length === 3){
    let hundreds = parseInt(numStr[0]*100);
    let tens = parseInt(numStr[1]*10);
    let ones = parseInt(numStr[2]);
    result.push(hundreds, tens, ones)
    console.log(result)
    compareTable(result, convertTable)
   }else if(length === 2){
    let tens = parseInt(numStr[0]*10);
    let ones = parseInt(numStr[1]);
    result.push(tens, ones)
    console.log(result)
    compareTable(result, convertTable)
   }else{
    let ones = parseInt(numStr[0]);
    result.push(ones);
    console.log(result);
    compareTable(result, convertTable)
   }
    

}

function compareTable(arr, obj){
   const roman = arr.map(num => obj[num]).join("")
   output.innerText = roman;
}


function converter(){
  if(reminder()){
    digitSpliter();
  }
  
}



converterBtn.addEventListener("click", converter)
