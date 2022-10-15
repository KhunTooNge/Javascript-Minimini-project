const playlistContainer = document.getElementsByClassName("playlistContainer")[0];
const autioTab = document.querySelector(".autioTab");
const currentAndTotalTime = document.querySelector(".currentAndTotalTime");
const currentProgressbar = document.getElementById("currentProgressbar");
const playicon = document.querySelector(".playicon");
const pauseicon = document.getElementsByClassName("pauseicon")[0];
const backwardicon = document.getElementsByClassName("backwardicon")[0];
const forwardicon = document.getElementsByClassName("forwardicon")[0];

const joxx = [
    { trackId: "music/ALwan.mp3", title: "A Lwan - TooNge" },
    { trackId: "music/Nga achit Tway PyanPay.mp3", title: "Nga achit Tway PyanPay - TooNge" },
    { trackId: "music/A Swe.mp3", title: "A Swe - TooNge" },
    { trackId: "music/Dear Agony.mp3", title: "Dear Agony - BreakingBjimin" }
];

// show title & autor
for (let i = 0; i < joxx.length; i++) {
    const title = joxx[i].title;
    const musicTitle = document.createElement("div");
    musicTitle.classList.add("trackItem");
    musicTitle.addEventListener("click", () => {
        playSong();
        currentplayIndex = i;
        // console.log(autioTab.duration);
    });
    const titleautor = (i + 1).toString() + " ." + title;
    musicTitle.textContent = titleautor;
    playlistContainer.append(musicTitle);
}
let musicTotalduration = "00:00"
let duration = 0;
autioTab.addEventListener("loadeddata", () => {
    duration = Math.floor(autioTab.duration);
    musicTotalduration = currentminAndsecs(duration);
});




autioTab.addEventListener("timeupdate", () => {
    const current = Math.floor(autioTab.currentTime);
    let musicCurrentPlaytime = currentminAndsecs(current);
    currentAndTotalTime.textContent = musicCurrentPlaytime + " / " + musicTotalduration;
    currentprogressbar(current);
});

// 
const currentprogressbar = (current) => {
    const currentprogressbarUpdate = (500 / duration) * current;
    currentProgressbar.style.width = currentprogressbarUpdate + "px";
}

const currentminAndsecs = (totalSecond) => {
    const minutes = Math.floor(totalSecond / 60);
    const seconds = totalSecond % 60;


    const minutesText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds;
    return minutesText + ":" + secondsText;
}


let currentplayIndex = 0;
let isplaying = "ture";

playicon.addEventListener("click", () => {
    const current = Math.floor(autioTab.currentTime);
    isplaying = "true";
    if (current === 0) {
        playSong();
    } else {
        autioTab.play();
        updatePlayandPausebutton();
    }

});

pauseicon.addEventListener("click", () => {
    isplaying = "false";
    autioTab.pause();
    updatePlayandPausebutton();
});

// pre
backwardicon.addEventListener("click", () => {
    if (currentplayIndex === 0) {
        return;
    }
    currentplayIndex -= 1;
    playSong();
});

//next 
forwardicon.addEventListener("click", () => {
    if (currentplayIndex === joxx.length - 1) {
        return;
    }
    currentplayIndex += 1;
    playSong();
});


const playSong = () => {
    const playmusic = joxx[currentplayIndex].trackId;
    autioTab.src = playmusic;
    autioTab.play();
    isplaying = "true";
    updatePlayandPausebutton();
}


const updatePlayandPausebutton = () => {
    if (isplaying === "true") {
        playicon.style.display = "none";
        pauseicon.style.display = "inline";
    } else {
        playicon.style.display = "inline";
        pauseicon.style.display = "none";
    }
}