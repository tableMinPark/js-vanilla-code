
const colors = ["red", "blue", "green", "purple", "yellow"];
let isResize = false;

const title = document.querySelector("#title");

// random use select color
function nextColor(nowColor){
    let nextColor;
    do {
        nextColor = colors[Math.floor(Math.random() * colors.length)];

    } while(nowColor == nextColor)
    return nextColor;
}


const superEventHandler = {    
    mouseenter: (event) => {
        // 1. direct access
        // title.innerText = "The mouse is here!";
        // title.style.color = "red";
    
        // 2. event use access
        isResize = false;
        const title = event.target;
        title.innerText = "The mouse is here!";
        title.style.color = nextColor(title.style.color);
    },

    mouseleave: (event) => {
        // 1. direct access
        // title.innerText = "The mouse is gone!";
        // title.style.color = "blue";
    
        // 2. event use access
        isResize = false;
        const title = event.target;
        title.innerText = "The mouse is gone!";
        title.style.color = nextColor(title.style.color);
    },

    contextmenu: () => {
        isResize = false;
        title.innerText = "That was a right click!";
        title.style.color = nextColor(title.style.color);
    },

    resize: () => {
        if (!isResize){
            title.innerText = "You just Resized!";
            title.style.color = nextColor(title.style.color);
            isResize = true;
        }
    }
}

// mouseEnter
title.addEventListener("mouseenter", superEventHandler.mouseenter);

// mouseLeave
title.addEventListener("mouseleave", superEventHandler.mouseleave);

// mouseClick Right
window.addEventListener("contextmenu", superEventHandler.contextmenu);

// windowsResize
window.addEventListener("resize", superEventHandler.resize);