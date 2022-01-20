const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// const link = document.querySelector("a");
// Handler
// function handleLinkClick(event){
//     event.preventDefault();
//     console.dir(event);             // mouse 이벤트에 대한 정보들을 볼 수 있음 (클릭한 mouse의 좌표)
// }
// Listener
// link.addEventListener("click", handleLinkClick);

function handleLoginSubmit(event){   // 첫번째로 주어지는 매개변수 (event) 는 event에 대한 정보를 지닌 argument를 던져줌
    event.preventDefault();           // event의 기본 동작이 발생하지 않도록 막는 역할 (ex. submit의 새로고침을 막음)   
    loginForm.classList.add(HIDDEN_CLASSNAME);      // css 에 정의된 classname 을 추가하여 화면상에서 숨김
    
    const username = loginInput.value;              // 입력된 username을 저장
    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings(username);
}

function paintGreetings(username){
    // greeting.innerText = "Hello " + username;    // id 가 greeting 인 element(h1) 를 "Hello 'username'" 으로 수정
    greeting.innerText = `Hello ${username}`;       // 문자열을 합치는 다른 방법 (백틱사용 `) : 쉘스크립트와 유사
    greeting.classList.remove(HIDDEN_CLASSNAME);    // id 가 greeting 인 element 의 classList 에 hidden 을 없애 화면상에 나타나게 함
}

// Main
const saveUesrname = localStorage.getItem(USERNAME_KEY);

if (saveUesrname === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginSubmit);
} else{
    paintGreetings(saveUesrname);
}
