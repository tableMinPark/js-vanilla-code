const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];       // toDo 를 저장할 배열

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));       // JSON.stringify() : 배열이나 클래스 객체를 string 객체로 변환시켜줌 (["a", "b"] -> [\"a\", \"b\"])
}

function deleteToDo(event){
    const li = event.target.parentElement;                        // event.target     : event 와 연결된 element (클릭 이번트에 연결된 버튼) + parentElement : element 의 부모
    li.remove();

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));  // .filter(함수)    : 함수를 통해 유효성 검사  
    saveToDos();
}

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = newToDoObj.id;
    span.innerText = newToDoObj.text;
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);           // appendChild 는 가장 마지막에 위치해야함
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }

    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function showLocalStorageItem(item){
//     console.log("this is the turn of ", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);

    // parsedToDos.forEach(showLocalStorageItem);                               // forEach() : 각 Item 에 대한 함수를 실행할 수 있음
    // parsedToDos.forEach((item) => console.log("this is the turn of ", item));   // arrow Function : 위와 동일하지만 더 간결함
}