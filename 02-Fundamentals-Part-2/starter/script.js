'use strict';

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can drive")

// const interface = 'Audio';
// const private = 267;
function logger(){
    console.log("My name is Sushmitha")
}

logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice
}

const juice = fruitProcessor(4,3);
console.log(juice);