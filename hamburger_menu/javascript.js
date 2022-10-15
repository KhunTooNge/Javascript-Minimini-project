const stickgroup = document.querySelector(".stickgroup");
const stick1 = document.querySelector(".stick1");
const stick2 = document.querySelector(".stick2");
const stick3 = document.querySelector(".stick3");
const colorchange = document.querySelector(".colorchange");
const liTab = document.getElementsByTagName("li");


stickgroup.addEventListener("click", () => { // close
    if (stickgroup.classList.contains("openhumburger")) {
        stickgroup.classList.remove("openhumburger");
        stick2.style.opacity = "1";
        stick1.classList.remove("rotatestick1");
        stick3.classList.remove("rotatestick3");
        colorchange.style.opacity = "0";
        for (let i = 0; i < liTab.length; i++) {
            liTab[i].classList.remove("liuptab");
            liTab[i].classList.add("liupDown");
        }

    } else {
        stickgroup.classList.add("openhumburger");
        stick2.style.opacity = "0"; //open
        stick1.classList.add("rotatestick1");
        stick3.classList.add("rotatestick3");
        colorchange.style.opacity = "1";
        for (let i = 0; i < liTab.length; i++) {
            liTab[i].classList.remove("liupDown");
            liTab[i].classList.add("liuptab");
        }
    }
});