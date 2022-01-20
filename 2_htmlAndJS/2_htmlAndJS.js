const h1 = document.querySelector(".hello h1");          // css 문법으로 html의 값들을 가져올 수 있음 (조건에 부합하는 첫번째 값만 가져옴)
const h1s = document.querySelectorAll(".hello h1");      // css 문법으로 html의 값들을 가져올 수 있음 (조건에 부합하는 모든 값들을 배열로 가져옴)

console.log(h1);
console.log(h1s);

// Event //////////////////////////////////////////////////////////////

// Handler
function handleH1Click(){
    /*
    // 1. 직접적으로 style에 접근하는 방식은 좋은 방식이 아님 (style 작업에 적합한 도구는 css이고 js는 애니메이션에 적합한 도구)
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else{        
        newColor = "blue";
    }
    h1.style.color = newColor;
    */

    /*
    // 2. css 파일에 .clicked 라는 style 을 정의 후 className 을 변경하는 방식 (선호하는 방식) : 더 짧고 간결함 (css에 style 을 정의 후 className만 변경해줌)
    const clickedClass = "clicked"
    if (h1.className === clickedClass){
        h1.className = "";
    } else{
        h1.className = clickedClass;
    }
    */

    // 3. 여러개의 className 사용할 때가 있기 때문에 기존의 className 을 유지하면서 className 변경하는 방식 (classList.contains() 사용)
    /*
    const clickedClass = "clicked"
    if (h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else{
        h1.classList.add(clickedClass);
    }
    */
    
    // 4. Toggle() 을 사용한 방식 : 주어진 className 이 존재하면 remove, 존재하지 않으면 add 를 해줌
    h1.classList.toggle("clicked");
    
}
function handleH1Mouseenter(){ 
    h1.innerText = "Mouse is here!";
}
function handleH1Mouseleave(){
    h1.innerText = "Mouse is gone!";
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato"
}
function handleWindowCopy(){
    alert("copy!");
}
function handleWindowOffline(){
    alert("SOS no WIFI");
}
function handleWindowOnline(){
    alert("ALL GOOOD access WIFI");
}

// Listener
h1.addEventListener("click", handleH1Click);                // click 신호가 들어오면 handleTitleClick 함수를 실행
h1.addEventListener("mouseenter", handleH1Mouseenter);      // mouse 가 element 위에 위치하면 실행
h1.addEventListener("mouseleave", handleH1Mouseleave);      // mouse 가 element 에서 벗어나면 실행
// Listener 를 선언하는 다른방식
// h1.onclick = handleTitleClick;
// h1.onmouseenter = handleTitleMouseenter;
// h1.onmouseleave = handleTitleMouseleave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

/*
click       : 마우스버튼을 클릭하고 버튼에서 손가락을 떼면 발생한다.
mouseover   : 마우스를 HTML요소 위에 올리면 발생한다.
mouseout    : 마우스가 HTML요소 밖으로 벗어날 때 발생한다.
mousedown   : 클릭을 하기 위해 마우스버튼을 누르고 아직 떼기 전인 그 순간, HTML요소를 드래그할 때 사용할 수 있다.
mouseup     : 마우스버튼을 떼는 그 순간, 드래그한 HTML요소를 어딘가에 놓을 때 사용할 수 있다.
mousemove   : 마우스가 움직일때마다 발생한다. 마우스커서의 현재 위치를 계속 기록하는 것에 사용할 수 있다.
focus       : HTML요소에 포커스가 갔을때 발생한다.
blur        : HTML요소가 포커스에서 벗어났을때 발생한다.
keypress    : 키를 누르는 순간에 발생하고 키를 누르고 있는 동안 계속해서 발생한다.
keydown     : 키를 누를 때 발생한다.
keyup       : 키를 눌렀다가 떼는 순간에 발생한다.
load        : 웹페이지에서 사용할 모든 파일의 다운로드가 완료되었을때 발생한다.
resize      : 브라우저 창의 크기를 조절할때 발생한다.
scroll      : 스크롤바를 드래그하거나 키보드(up, down)를 사용하거나 마우스 휠을 사용해서 웹페이지를 스크롤할 때 발생한다. 페이지에 스크롤바가 없다면 이벤트는 발생하지 않다.
unload      : 링크를 클릭해서 다른 페이지로 이동하거나 브라우저 탭을 닫을 때 혹은 브라우저 창을 닫을 때 이벤트가 발생한다.
change      : 폼 필드의 상태가 변경되었을 때 발생한다. 라디오 버튼을 클릭하거나 셀렉트 박스에서 값을 선택하는 경우를 예로 들수 있다.
*/