const timer = document.querySelector(".time");
const mini = document.querySelector(".minisecond");
const startbtn = document.getElementsByClassName("startbutton")[0];
const pausebtn = document.getElementsByClassName("pausebutton")[0];
const continuebtn = document.getElementsByClassName("continuebutton")[0];
const restartbtn = document.getElementsByClassName("restartbutton")[0];


let second = 0,
    minute = 0,
    hour = 0,
    minisecond = 0;


let startTime = () => {
    minisecond += 1;
    if (minisecond === 100) {
        minisecond = 0;
        second += 1;
        if (second === 60) {
            second = 0;
            minute += 1;
            if (minute === 60) {
                minute = 0;
                hour += 1;
                if (hour === 24) {
                    hour = 0;
                }
            }
        }
    }

    let secondtext = second < 10 ? "0" + second.toString() : second;
    let minutetext = minute < 10 ? "0" + minute.toString() : minute;
    let hourtext = hour < 10 ? "0" + hour.toString() : hour;
    timer.textContent = hourtext + ":" + minutetext + ":" + secondtext;
    mini.textContent = minisecond;
}

let intervalId;
startbtn.addEventListener("click", () => {
    intervalId = setInterval(startTime, 10);
});

pausebtn.addEventListener("click", () => {
    clearInterval(intervalId);
});

continuebtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 10);
});

restartbtn.addEventListener("click", () => {
    clearInterval(intervalId);
    second = 0, minute = 0, hour = 0;
    intervalId = setInterval(startTime, 10);
})