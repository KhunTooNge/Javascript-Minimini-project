// scrope
//local scrop
// groble scrop

let city = "yangon" // groble scrope
let myfun = function greet() {
    let welcom = "Hello Welcom to ";
    num = 10
    console.log(welcom, city);
}

console.log(welcom); // will raise error
console.log(num); // will not raise error
greet();

//let , const is block scrope;  
// var is not block scrope;

{
    let numberOne = 10;
    const numberTwo = 20;
    var numberThree = 30;
}
console.log(numberOne); // will raise error
console.log(numberTwo); // will raise error
console.log(numberThree); // will not raise error



let cities = "Myanmar";

let outterFunction = () => {
    var num = 10;
    age = 20;
    if (num === 10) {
        let numWithLet = 1;
        const numWithconst = 5;
        var numWithVar = 15;
    }

    console.log(numWithVar);
    // console.log(numWithLet);
    // console.log(numWithconst);

    const innerFunction = () => {
        console.log(numWithVar);
        console.log(cities);
    }
    innerFunction();
}
