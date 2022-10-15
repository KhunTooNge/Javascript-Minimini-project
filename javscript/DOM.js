/* Document Object Model (DOM) CRUD */

// <div>hello html</div>

// creat html Element
// read html Element
// update html Element
// delete html Element

/* 
//create divElemnent Dynamic Website beginner
// <div>Welcom to Myanmar</div>
const h1Element = document.createElement("h1");
const textNode = document.createTextNode("Welcom to Myanmar");
h1Element.appendChild(textNode);
const tabCollection = document.getElementsByTagName("body"); // html collection;
console.log("What is this?this is : " + bodyElement);
const bodyElement = tabCollection[0];
bodyElement.appendChild(h1Element);




// read or retreat
const readh1Element = document.getElementsByTagName('h1')[0];
console.log(readh1Element[0]);
console.log("h1 inside is", readh1Element.textContent); // textContent  property

// update
readh1Element.textContent = "Welcom to Yangon";
console.log("h1 inside now is update see: ", readh1Element.textContent);

//delete
readh1Element.remove();
console.log("now delete h1 tab see", readh1Element.textContent);

*/





// eperso 63
//

// Useful DOM methods and properties */

// const bodyElement = document.getElementsByTagName("body");
// console.log("This is a body", bodyElement);

// const divElemnent = document.getElementsByClassName("parent");
// // console.log("This is parent div", divElemnent);
// divElemnent.innerHTML = "";

// const IDElement = document.getElementById("myID");
// console.log("ID div", IDElement);



/* <div class="parent">
<div class="child">Child_1</div>
<div class="child">Child_2</div>
</div> */


const tabCollection = document.getElementsByTagName("body")[0];
const parentElement = document.createElement("div");
parentElement.classList.add("parent", "textList");
parentElement.classList.remove("textList");

tabCollection.appendChild(parentElement);

const childElementOne = document.createElement("div");
childElementOne.append("Child One");
childElementOne.classList.add("child");
const TextNodeOne = document.createTextNode("Child One");
childElementOne.appendChild(TextNodeOne);

const childElementTwo = document.createElement("div");
childElementTwo.append("Child Two");
childElementTwo.classList.add("child");
const TextNodeTwo = document.createTextNode("Child Two");
childElementTwo.appendChild(TextNodeTwo);

parentElement.append(childElementOne, childElementTwo);

const styleTxt = document.getElementsByClassName("styleText")[0];
// console.log(styleTxt);
console.log("Style text width", getComputedStyle(styleTxt).width);
console.log("Style text height", getComputedStyle(styleTxt).height);
console.log("Style text background-color", styleTxt.style.backgroundColor);

