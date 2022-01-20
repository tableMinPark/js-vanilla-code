const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");          // img 인 element 생성 (document 에 존재하지 않음 : 생성만 함)

bgImage.src = `img/${chosenImage}`;                     // 위에서 생성한 img element 에 src 지정

document.body.prepend(bgImage);                         // src 지정한 img element 를 body 에 위치시킴 (body 의 가장 위)
document.body.appendChild(bgImage);                     // src 지정한 img element 를 body 에 위치시킴 (body 의 가장 아래)

// appendChild, prepend 를 동시에 사용했을 때 가장 마지막꺼만 적용됨 (위의 코드는 appendChild() 가 적용)