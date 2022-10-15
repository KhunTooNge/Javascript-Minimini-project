// Events

// emitter, lister or handler
// an event occurs , run some codes


const mybutton = document.getElementById("mybutton");
const image = document.getElementsByClassName("image")[0];  // html collection
const OriginalImage = image.src
const imageArray = [
    "https://images.unsplash.com/photo-1639748530471-218c37b036b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1648392326649-452c663634c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1647364362122-93d38ad8db5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1560372326-6db12716ff43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8YWV1NnJMLWo2ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1605169935971-8d9ce8a788b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
];
let counter = 0;

const myfunction = () => {
    if (counter === 5) {
        image.src = OriginalImage;
        counter = 0;
        return;
    }
    const imageLink = imageArray[counter]; // 0 1 2 3 4

    image.src = imageLink;
    counter += 1;
    console.log("counter value is : ", counter); // 1 2 3 4 5
}

// mybutton.onclick = myfunction;
mybutton.addEventListener("click", myfunction);


/* 
1. images in array
2. counter
3. get image in array using counter
*/




