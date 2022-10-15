const inputVal = document.querySelector('.search input');
const infoText = document.querySelector('.info-text');
const showAllList = document.querySelector('ul');
const audioIcon = document.querySelector('#playAudio');
showAllList.style.display = 'none';
let audio;

//show data
let showData = (data) =>{

    let last_phonetic = data[0].phonetics.length -1 ;
    let last_meaning = data[0].meanings.length - 1;
    let last_definition = data[0].meanings[last_meaning].definitions.length - 1;

    showAllList.style.display = 'block';
    audio = new Audio(`${data[0].phonetics[last_phonetic].audio}`);

    document.querySelector('.details p').innerText = data[0].word ;
    document.querySelector('.details span').innerText = `${data[0].meanings[last_meaning].partOfSpeech} / ${data[0].phonetics[last_phonetic].text}`
    document.querySelector('.meaning span').innerText = data[0].meanings[last_meaning].definitions[last_definition].definition

    
    let example = data[0].meanings[last_meaning].definitions[last_definition].example;
    if(example){
        document.querySelector('.example').style.display = 'block';
        document.querySelector('.example span').innerText = example;
    }else if(!example){
        document.querySelector('.example').style.display = 'none';
    }

    let synonyms = data[0].meanings[last_meaning].synonyms[0];
    if(synonyms){
        document.querySelector('.synonyms .list').innerText = "";
        document.querySelector('.synonyms').style.display = 'block';

        let synonyms_length = data[0].meanings[last_meaning].synonyms.length;
        for (let i = 0; i < synonyms_length ; i++) {
            let items = `<span onclick= "search_synonyms('${data[0].meanings[last_meaning].synonyms[i]}')">${data[0].meanings[last_meaning].synonyms[i]}</span>`;
            document.querySelector('.synonyms .list').insertAdjacentHTML('beforeend',items);
        }
    }else if(!synonyms){
        document.querySelector('.synonyms').style.display = 'none';
    }  
}


// data hav or not 
let getData = (result,word)=>{
    if(result.title == 'No Definitions Found'){
        infoText.innerHTML = `There is no such thing as this word meaning`;
        infoText.style.color = 'red';
    }else{
        inputVal.blur();
        infoText.innerHTML = '';
        inputVal.value = '';
        showData(result)
    }
}

// serach data 
let searchData = (word) => {
   infoText.innerText = `Searching ${word}`;
   infoText.style.color = 'blue'
   fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + `${word}`)
   .then(res => res.json())
   .then(result => getData(result,word));
}

// listener and fire keyup event
inputVal.addEventListener('keyup',(e)=>{
    if(e.key == "Enter" && e.target.value){
        searchData(e.target.value);
    }
})


inputVal.addEventListener('focus',()=>{
    showAllList.style.display = 'none';
    infoText.innerText = `Type any existing word and press enter to get meaning, example,
    synonyms, etc.`
    infoText.style.color = '#9a9a9a'

});


audioIcon.addEventListener('click',()=>{
        audio.play();
});


let search_synonyms = (key) => {
    searchData(key);
}
