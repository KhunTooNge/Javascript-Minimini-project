const keyboard = document.getElementById('keyboard');
let programmingLanguage = [
    'PYTHOM',
    'JAVASCRIPT',
    'JAVA',
    'C#',
    'C',
    'C++',
    'GO',
    'R',
    'SWIFT',
    'PHP'
];

let chance = 6;
let guessed_answer = [];
let wordStatus = null;
let answer = '';
let picStatus = 0;




function btn_group(){
    keyboard.innerHTML = '';
    let keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ+#".split('').map((letter)=>{
        keyboard.innerHTML += `<button class=" btn btn-outline-secondary m-2" onclick="checkAns('${letter}')" id="${letter}">${letter}</button>`
    });
}

// random answer of programming language;
function generate_answer(){
    answer =programmingLanguage[Math.floor(Math.random() * programmingLanguage.length)] ;
    console.log(answer);
}


// show answer or '-' in DOM
function show_answer_field(){
    wordStatus = answer.split('').map(value =>{
        return  guessed_answer.indexOf(value) >= 0  ? value : ' _ ';
    }).join('');

    document.getElementById('show_ans').innerHTML = wordStatus;
}


//navigate alert box .....
function checkAns(letter){
    guessed_answer.indexOf(letter) === -1 ? guessed_answer.push(letter) : null ;
    document.getElementById(letter).setAttribute("disabled",true);

    if(answer.indexOf(letter) >= 0){
        show_answer_field();
        setTimeout(checkWin,500); 
    }else if(answer.indexOf(letter) == -1){
        chance--;
        picStatus++;
        updateChance();
        checkHangMan();
        setTimeout(checkLose,500);
    }

}


// alert when you win the game
function checkWin(){
    if(wordStatus === answer){
        Swal.fire({
            title:'Sweet!' ,
            text: 'Congratulations.',
            imageUrl: './images/Congratulations.gif',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Custom image',
            confirmButtonText: 'Play Again'
          }).then( _ => restart());
    }
}

// alert you lose the game
function checkLose(){
    if(chance === 0){
        Swal.fire({
            title:  'You Lose the game',
            text: 'The answer is ' + answer,
            imageUrl: './images/lost.png',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Custom image',
            confirmButtonText: 'Play Again'
          }).then(_ => restart());
    }
}


// restart the game
function restart(){
    chance = 6;
    guessed_answer = [];
    picStatus = 0;
    wordStatus = null;
    answer = '';
    document.getElementById('saturationImage').src="./images/0.jpg";
    updateChance();
    generate_answer();
    show_answer_field();
    btn_group();
    
}

// saturation check when chance is decrease every 1 
function checkHangMan(){
    document.getElementById('saturationImage').src = "./images/" + picStatus + ".jpg"
}

// chance show
function updateChance (){
    document.getElementById('chance').innerText = chance ;
}

btn_group()
updateChance();
generate_answer();
show_answer_field();


