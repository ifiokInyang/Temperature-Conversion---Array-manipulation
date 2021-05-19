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
