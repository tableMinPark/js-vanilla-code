const API_KEY = "";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}6&lon=${lng}&appid=${API_KEY}&units=metric`;
    
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

console.log(navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError));