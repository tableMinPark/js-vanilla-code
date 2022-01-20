const clock = document.querySelector("h2#clock");       // h2 이고 id 가 clock 인 element

// function sayHello() {
//     console.log("Hello");
// }
// setInterval(sayHello, 5000);        // 일정시간마다 함수호출을 반복 (5000ms 마다 sayHello() 반복해서 호출)
// setTimeout(sayHello, 5000);            // 일정시간이 경과 후 함수를 호출 (1번만 호출)

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");         // String(숫자) : 숫자를 문자열로 형변환
    const minutes = String(date.getMinutes()).padStart(2, "0");     // padStart(최대 글자수, 앞부분에 채울 문자);
    const seconds = String(date.getSeconds()).padStart(2, "0");     // padEnd(최대 글자수, 뒷부분에 채울 문자);
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

