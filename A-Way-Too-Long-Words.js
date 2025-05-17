function validateInput(input) {
  if (input.length >= 10) {
    let str1 = input[0];
    let str2 = input.length - 2;
    let str3 = input.slice(-1);
    console.log(str1 + str2 + str3);
  } else {
    console.log(input);
  }
}
validateInput("localización");
validateInput("local");
