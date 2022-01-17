

// Variable //////////////////////////////////////////////////////////////
const a = 5;                    // 상수 : 변하지 않음                   
const b = 2;
let myName = "sangmin";         // 변수 : 변경할 수 있음 (var도 사용가능)

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "Park Sangmin";
console.log("my name is " + myName);


// boolean / null / undefined ////////////////////////////////////////////
const amIFat = true;
console.log(amIFat);

const amIFat2 = null;
let something;
console.log(amIFat2);       // null         : 값이 없다는 것을 의도적으로 표현
console.log(something);     // undefined    : 값이 주어지지 않음


// Array /////////////////////////////////////////////////////////////////
const days0fWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(days0fWeek);
console.log(days0fWeek[5]);

// Add one more day to the array
days0fWeek.push("sun");
console.log(days0fWeek);


// Object ////////////////////////////////////////////////////////////////
const player = {
    name: "sangmin",
    points: 10,
    fat: true,

}

console.log(player);
console.log(player.name);
console.log(player["name"]);

console.log(player);
player.fat = false;     // const로 선언했지만 값이 바뀜 : object는 동일하고, object 내부의 변수를 수정하는 것이기 때문에 가능 
console.log(player);    

player.lastName = "Park";   // object에 property를 추가할 수 있음
console.log(player);


// function //////////////////////////////////////////////////////////////
function sayHello(name, age){
    console.log("Hello my name is " + name + " and I'm " + age);
}
sayHello("sangmin", 25);
sayHello("sohyun", 25);
sayHello("se-a", 16);

function plus(a, b){
    console.log(a + b);     // NaN : 숫자가 아님
}
function divide(a, b){
    console.log(a / b);
}
plus(8, 60);
divide(98, 20)

const player2 = {
    name: "sangmin",
    sayHello: function(otherPersonName){
        console.log("hello " + otherPersonName + " nice to meet you!");
    },
}
console.log(player2.name);
player2.sayHello("sohyun");