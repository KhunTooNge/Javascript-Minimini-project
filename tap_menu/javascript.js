const ansistor = document.querySelector(".ansistor");
const ulTab = document.querySelector("ul");
const slider = document.querySelector(".slider");

const navBar = ["home", "services", "contact us", "about us", "log in"];

const moveslide = (event) => {
    const clickidTab = event.target.id;
    const clickTabfromDom = document.getElementById(clickidTab);
    const clickTaboffsetWidth = clickTabfromDom.offsetWidth;
    const clickTabfromDomleft = clickTabfromDom.offsetLeft;

    slider.style.width = clickTabfromDom.offsetWidth + "px";
    slider.style.transform = `translateX(${clickTabfromDomleft}px)`
}
for (let i = 0; i < navBar.length; i++) {
    const liTab = document.createElement("li");
    liTab.append(navBar[i].toUpperCase());
    liTab.id = i;
    liTab.addEventListener("click", moveslide);
    ulTab.append(liTab);
    if (liTab === 0) {
        slider.style.width = liTab.offsetWidth + "px";
    }
    slider.style.width = liTab.offsetWidth + "px";
}