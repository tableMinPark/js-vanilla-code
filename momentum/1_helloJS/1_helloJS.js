

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


// homework (function) ///////////////////////////////////////////////////
const calculator = {
    add: function(a, b){
        console.log(a + b);
    },
    minus: function(a, b){
        console.log(a - b);
    },
    multiply: function(a, b){
        console.log(a * b);
    },
    divide: function(a, b){
        console.log(a / b);
    },
    pow: function(a, b){
        console.log(a ** b);
    }
}

calculator.add(1, 2);
calculator.minus(2, 3);
calculator.multiply(3, 4);
calculator.divide(10, 2);
calculator.pow(2, 3);


// return ////////////////////////////////////////////////////////////////
const age = 96;
function calculateKrAge(age0fForeigner){
    return age0fForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);

const calculator2 = {
    add: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    multiply: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    },
    pow: function(a, b){
        return a ** b;
    }
}

const addResult = calculator2.add(1, 2);
const minusResult = calculator2.minus(addResult, 4);
const multiplyResult = calculator2.multiply(addResult, minusResult);
const divideResult = calculator2.divide(minusResult, multiplyResult);
const powResult = calculator2.pow(divideResult, multiplyResult);


// conditionals //////////////////////////////////////////////////////////
const age2 = parseInt(prompt("How old are you?"));   // 문자를 parseInt에 넣으면 NaN이 나옴 (입력이 문자인지 숫자인지 판별가능)

console.log(typeof age2);   // typeof : 변수의 타입을 확인할 수 있음
console.log(isNaN(age2));

if (isNaN(age2) || age2 < 0){
    console.log("Please write a real positive number.");
} else if (age2 < 18){
    console.log("You are too young.");
} else if (age2 >= 18 && age2 <= 50){
    console.log("You can drink.");
} else if (age2 > 50 && age2 <= 80){
    console.log("You should exercise.");
} else if (age2 > 80){
    console.log("You can do whatever you want.");
}