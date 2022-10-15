const buttonTab = document.querySelector('.btn');
const textareaTab = document.querySelector('.form-control');
const listGroup = document.querySelector('.listgroupDiv');
const showcase = document.getElementById('showcase');
let counter = 0;
const showBox = () => {
    buttonTab.addEventListener('click', () => {
        const listshowTab = document.createElement('div');
        listshowTab.classList.add('liststyle');
        listshowTab.id = counter;
        listshowTab.textContent = textareaTab.value;
        localStorage.setItem(counter++, textareaTab.value);
        listGroup.append(listshowTab);
        textareaTab.value = "";
    });
}
window.addEventListener('load', () => {
    // let valuess = '';
    for (let i = 0; i < localStorage.length; i++) {
        const divTab = document.createElement('div');
        divTab.classList.add('headache');
        valuess = localStorage.getItem(counter);
        divTab.innerHTML = valuess;
        showcase.append(divTab);
        counter++;
    }
    showBox();

});