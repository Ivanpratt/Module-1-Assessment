console.log("Hello and Welcome to the Password Validator")

const readline = require('readline');
const test = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

test.question("please enter your password:", function (answer) {
let passwordlength = answer.length
if (passwordlength > 2500000){
    console.log("Your password is probably too long")
}else if (answer === "password") {
    console.log("Do not use 'password' as your password")
}else if(passwordlength >= 10) {
    console.log("Your password is long enough")
} else {
    console.log("Your password is not long enough")
}
    test.close();
});

  
  