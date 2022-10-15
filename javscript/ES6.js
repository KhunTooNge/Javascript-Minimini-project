// Destructring,Spread Operator, Rest Parameter (ES6 Feature)

/* Object destructuring */
const customer = { name: 'customer1', email: 'customer1@gmail.com', gender: 'female' };
// const name = customer.name;
// const email = customer.email;
// const gender = customer.gender;
// if  object value, we went to store in variable use this
//ES6
const { name, email, gender } = customer;

/* Array destructuring */
const cities = ["Yangon", "Mandalay", "Myitkyina"];
const [city1, city2, city3] = cities;


/* Spread Operator */
const CopyCustomers = { ...customer, phone: '0945997332' };  // copy 
delete CopyCustomers.phone;

const citiesInMyanmar = ["Taunggyi", ...cities];


/* Rest Parameter */
let maththis = function calculate(...params) {
    return params;
}
maththis(1, 2, 3, 4, 5, 6); // will return array type;

let maththat = (...para) => {
    let total = 0;
    for (let i = 0; i < para.length; i++) {
        total += para[i];
    }
    return total;
}
maththat(1, 2, 3, 4, 5, 6); // infinaty parameter we will input and call function;



