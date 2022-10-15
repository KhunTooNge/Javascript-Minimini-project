 const butoom = document.querySelector('.btn');
 const parentTab = document.querySelector('.parent');

 let toastalert = () => {
     parentTab.innerHTML = '';
     const childTab = document.createElement('div');
     childTab.classList.add('child');
     childTab.append("this file uploaded success");
     parentTab.append(childTab);
     childTab.style.bottom = `-${childTab.offsetHeight}px`;
     setTimeout(() => {
         childTab.style.bottom = `0px`;
     }, 100);
     setTimeout(() => {
         childTab.style.bottom = `-${childTab.offsetHeight}px`;
     }, 2000);
 }
 butoom.addEventListener("click", () => {
     toastalert();
 })