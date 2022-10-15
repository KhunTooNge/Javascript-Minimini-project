
try {
    const num = 10;
    num++
} catch (error) {
    console.log("error is here", error);
}

const user = ["john", "Joe", "Herry", "Mary"];
user.shift("smith");


const showChatSidebar = () => {
    console.log('this is showChatSidebar');
    for (let i = 0; i < user.length; i++) {
        const sidebar = user[i];
        console.log(sidebar);
    }
}
const showLeftSidebar = () => { console.log('thi is showLeftSidbar') }
const showMainFeed = () => { console.log('this is showMainFeed') }

try {
    showChatSidebar();
} catch (error) {
    console.log('error is here', error);
}
showLeftSidebar();
showMainFeed();