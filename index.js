// FUNCTION TO CONVERT FROM FAHRENHEIT TO CELSIUS
function convertFahrToCelsius(F) {
  if (isNaN(F) || !isNaN(Number("F"))) {
    console.log(F, " is not a valid number but a/an " + typeof F);
    return;
  }
  let C = ((F - 32) * 5) / 9;
  console.log(C.toFixed(4));
}
convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1, 2, 3]);
convertFahrToCelsius({ temp: 0 });




// FUNCTION CHECKYUGIOH

function checkYuGiOh(n) {
if (isNaN(n) || !isNaN(Number("n"))){
  console.log("invalid parameter: ", n);
return;
}
const array1 = Array.from({length: n}, (_,index) => index + 1); //creating an array of numbers from 1 to n.
let arr = new Array();
for(let value of array1){
if(value % 2 === 0 && value % 3 === 0 && value % 5 === 0){
value = "yu-gi-oh";
arr.push(value);
}
else if(value % 3 === 0 && value % 5 === 0){
value = "gi-oh";
arr.push(value);
}
else if(value % 2 === 0 && value % 5 === 0){
value = "yu-oh";
arr.push(value);
}
 else if(value % 2 === 0 && value % 3 === 0){
  value = "yu-gi";
  arr.push(value);

} else if(value % 5 === 0) {
  value = "oh";
  arr.push(value);
}else if(value % 3 === 0){
  value = "gi";
  arr.push(value);
 }
else if(value % 2 === 0){
  value = "yu";
  arr.push(value)


} else {
  arr.push(value)};
}
return arr;
}

console.log(checkYuGiOh(10));
console.log(checkYuGiOh("5"));
console.log(checkYuGiOh("fizzbuzz is meh"));


