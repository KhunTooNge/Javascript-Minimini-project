// Javascript Object Notation

// const man = {
//     name: "Aung Aung",
//     age: 40,
//     position: "manager",
//     male: true
// }

// let objToJson = JSON.stringify(man);
// const setInLocalStorage = localStorage.setItem('person', objToJson);
// const getFromStorage = localStorage.getItem('person');
// console.log("getFromStorage:", getFromStorage);
// let JsonToObj = JSON.parse(getFromStorage);
// console.log(JsonToObj)


// JSON = (string,number,null,boolien) but json can't accept (method,date,function,undefine)

const users = [{
    name: 'Ag Ag',
    age: 22,
    email: 'Agag2@gmail.com',
    gender: 'male'
}, {
    name: 'Mg Ag',
    age: 24,
    email: 'Mgag2@gmail.com',
    gender: 'male'
}];

let objToJson = JSON.stringify(users); // serialization
let setInLocalStorage = localStorage.setItem('usr', objToJson);
let getFromStorage = localStorage.getItem('usr');
console.log("getFromStorage ", getFromStorage);
let JsonToObjarray = JSON.parse(getFromStorage); //deserialization
console.log(JsonToObjarray[0].email);

//obj => json = serialization
//json => obj||array = deserialization.......