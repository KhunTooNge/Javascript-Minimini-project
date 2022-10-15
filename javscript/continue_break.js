const users =
    [
        { name: "TooNge", age: 27, email: "nge567890@gmail.com", gender: "male" },
        { name: "Poethiri", age: 26, email: "poethiri@gmail.com", gender: "female" },
        { name: "EiTone", age: 28, email: "eilay@gmail.com", gender: "female" },
        { name: "Zayar", age: 27, email: "khun@gmail.com", gender: "male" },
        { name: "NwayNway", age: 26, email: "nway@gmail.com", gender: "female" },
    ];

// for (i = 0; i < users.length; i++) {
//     let userEmail = users[i];
//     // if (users[i].gender === "male") {
//     //     continue;
//     // }
//     // console.log("femail useremail is" + userEmail.email);
//     console.log("top three user is " + userEmail.email);
//     if (i === 2) {
//         break;
//     }
// }

let i = 0;
while (i < users.length) {
    let userEmail = users[i];
    i++;
    if (userEmail.gender === "male") {
        continue;
    }
    console.log("sending email to femail: " + userEmail.email);
}

while (i < users.length) {
    let userEmail = users[i];
    console.log("Top three customer:" + userEmail.email);
    i++;
    if (i === 3) {
        break;
    }
}

// 2D array
let arr = [[1,2],[3,4],[4,5]];
for (let i = 0; i < arr.length; i++) {
    let nums = arr[i];
    for (let j = 0; j < nums.length; j++) {
        let numbers = nums[j];
        console.log(nums[j]);
    } 
}