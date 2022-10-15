/* 
1. Programmers are lazy
2. lazy loading
3. css attribute selector
4. 
*/
// a[href *= 'example']
const number1 = document.querySelector(`a[title]`);
const number2 = document.querySelectorAll(`a[href$='.org']`);
const number3 = document.querySelectorAll(`a[href = "https://example.com"]`);
const number4 = document.querySelectorAll(`a[class="logo"]`);

number1.style.background = "yellow";
number2.style.background = "red";
// number3.style.background = "green";
// number4.style.color = "blue";