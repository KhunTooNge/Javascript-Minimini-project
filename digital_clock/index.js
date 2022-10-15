let hms = document.querySelector('.hms');
let ymd = document.querySelector('.ymd');

function dynamic() {
    let date = new Date();

    let nc_hour = date.getHours();
    let nc_min = date.getMinutes();
    let nc_sec = date.getSeconds();

    let hr;
    let minutes = nc_min < 10 ? "0" + nc_min : nc_min;
    let sec = nc_sec < 10 ? "0" + nc_sec : nc_sec;
    let ampm = nc_hour <= 12 ? "AM" : "PM";


    let year = date.getFullYear();
    let month;
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let weekday;

    let month_arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    month = month_arr[date.getMonth()];

    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    weekday = week[date.getDay()];

    //hours
    if (nc_hour > 12) {
        hr = "0" + nc_hour - 12;
    } else if (nc_hour == 0) {
        hr = 12;
    } else {
        if (nc_hour < 10) {
            hr = "0" + nc_hour;
        } else {
            hr = nc_hour;
        }
    }

    ymd.innerHTML = `<p>${day} / ${month} /  ${year} ${weekday}</p>`
    hms.innerHTML = `<h2> ${hr} : ${minutes} : ${sec} </h2><span>${ampm}</span>`
}

setInterval(dynamic, 1000);



// month
// if (date.getMonth() < 10) {
//     month = "0" + (date.getMonth() + 1);
// } else if (date.getMonth() == 0) {
//     month = 12;
// } else {
//     month = date.getMonth() + 1;
// }

// weedday
// switch (date.getDay()) {
//     case 0:
//         weekday = "Sunday";
//         break;
//     case 1:
//         weekday = "Monday";
//         break;
//     case 2:
//         weekday = "Tuesday";
//         break;
//     case 3:
//         weekday = "Wednesday";
//         break;
//     case 4:
//         weekday = "Thursday";
//         break;
//     case 5:
//         weekday = "Friday";
//         break;
//     case 6:
//         weekday = "Saturday";
//         break;
// }