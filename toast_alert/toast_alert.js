const parent = document.querySelector(".parent");

const opentoastAlert = () => {
    const toastalertParent = document.createElement("div");
    toastalertParent.classList.add("toastalertParent");
    const toastAlertItem = document.createElement("div");
    toastAlertItem.classList.add("child");
    const buttonTab = document.createElement("button");
    buttonTab.classList.add("btn", "btn-light");
    buttonTab.append("Clear");
    // toastAlertItem insert textcontact;
    toastAlertItem.append('we use cookie. Your continue use our site implies and you agree.more detail');
    toastalertParent.append(toastAlertItem, buttonTab);
    parent.append(toastalertParent);

    toastalertParent.style.bottom = `-${toastalertParent.offsetHeight}px`;
    // console.log(toastalertParent.offsetHeight);
    setTimeout(() => {
        toastalertParent.style.bottom = "0px";
    }, 2000);

    buttonTab.addEventListener("click", () => {
        localStorage.setItem("accepted", "1");
        toastalertParent.style.bottom = `-${toastalertParent.offsetHeight}px`;
    });

}


window.addEventListener("load", () => {
    let accepted = localStorage.getItem("accepted"); //"1"

    if (accepted !== "1") {
        opentoastAlert();
    }
});