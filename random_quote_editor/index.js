const search = document.getElementById('btn_serach');
const title = document.querySelector('h3');
const autor = document.querySelector('.autor');
const speech = document.querySelector('#speech');
const copy = document.querySelector('#copy');
const tweeterShare = document.querySelector('#twitter_share');
let is_fetch = false;

search.addEventListener('click',()=>{
    search.innerText = 'loaded Quotes';
    search.classList.add('load');
    is_fetch = true;
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data =>{
       title.innerText = `${data.content}`;
       autor.innerText = `By ${data.author}`
       search.innerText = 'New Quote';
       search.classList.remove('load');
    });

    if(is_fetch == true){
        speech.addEventListener('click',()=>{
            let txtToSpeech = new SpeechSynthesisUtterance(`${title.innerText} ${autor.innerText}`);
            speechSynthesis.speak(txtToSpeech);
        });

        copy.addEventListener('click',_=>{
           navigator.clipboard.writeText(title.innerText);
        });

        tweeterShare.addEventListener('click',()=>{
            let url = `https://twitter.com/intent/tweet?url=${title.innerText}`;
            window.open(url,'_blank');
        })
    }
});






