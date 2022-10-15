// array - loop
// wht?
// DAY _ Don't Repeat Yourself
const Customers = [
  { Name: "customer1", phoneNumber: "1234567", email: "customer1@gmail.com", dateOfBirth: "01-01-2000" },
  { Name: "customer2", phoneNumber: "2345678", email: "customer2@gmail.com", dateOfBirth: "01-01-2001" },
  { Name: "customer3", phoneNumber: "3456789", email: "customer3@gmail.com", dateOfBirth: "01-01-2002" },
  { Name: "customer4", phoneNumber: "4567891", email: "customer4@gmail.com", dateOfBirth: "01-01-2003" },
];
// get customers Email
// const Customer1 = Customers[0];
// const Customer1Email = Customers[0].email;
// const Customer2Email = Customers[1].email;
// const Customer3Email = Customers[2].email;
// const Customer4Email = Customers[3].email;

// // sent email
// sendEmail(Customer1Email);
// sendEmail(Customer2Email);
// sendEmail(Customer3Email);
// sendEmail(Customer4Email);

// looping
for (let i = 0; i < Customers.length; i++) {
  let customerEmail = Customers[i].email;
  sendEmail(customerEmail)
}
let sendEmail = (email) => { console.log("Send Email to" + email) }

// forin  php=> key;
let user = { name: "Mg Mg", age: 25, eyecolor: "black", }
for (const info in user) {
  console.log(user[info]);
}

// while loop
let num = true;
while (num) {
  let valid = prompt("enter number between 1 and 100");
  let numvalid = parseInt(valid, 10);
  if (numvalid > 1 && numvalid < 100) {
    console.log("Enter value : " + valid);
    num = false;  // exit conditon (inportant)
  }
}