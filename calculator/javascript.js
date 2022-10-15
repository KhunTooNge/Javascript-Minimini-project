let number = document.getElementsByClassName('number');
let history = document.getElementById('history-value');
let output = document.getElementById('output-value');
let operator = document.getElementsByClassName('operator');

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', _ => {
        output.innerHTML = output.innerText + number[i].id;
    });
}

for (let j = 0; j < operator.length; j++) {
    operator[j].addEventListener('click', () => {
        if (operator[j].id == "clear") {
            output.innerText = '';
            history.innerText = '';
        } else if (operator[j].id == "backspace") {
            let out = output.innerText;  
            let result = out.substr(0, out.length - 1);
            output.innerHTML = result;
        } else {
            if (operator[j].id == '=') {
                let value = history.innerText;
                let cal = output.innerText;
                let result = eval(value + cal);
                output.innerHTML = result;
                history.innerHTML = value + cal;
            } else {
                history.innerHTML = output.innerText + operator[j].id;
                output.innerHTML = '';
            }
        }
    })

}