// let todaydate = new Date();
// todaydate.getDate(); // 1 to 31
// todaydate.getMonth(); // 0 to 11
// todaydate.getDay(); // 0 is sun to 6 is sat
// todaydate.getFullYear();
// todaydate.getTime(); // start count 1970 junary 1st

// // new Date('string')  **** don't 
// //new Date(year,monthInde,day,hours,minutes,seconds,milliseconds) **** do
// todaydate.setDate('28'); // ရက်

// let user = {
//     name: "Mg Mg",
//     service: "2",
//     bookingdate: ""
// }

const btn = document.getElementsByClassName('btn')[0];
const parentDiv = document.getElementsByClassName('parent')[0];
btn.addEventListener("click", () => {
    let bookingtime = user.bookingdate = new Date().getHours();

    parentDiv.textContent = user.name + " is booking Type " + user.service + " at " +
        bookingtime + " o'clock ";
});