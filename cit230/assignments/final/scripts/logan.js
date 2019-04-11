var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5772317&appid=63d7b710055757e4b59628d0938f81f3&units=imperial', true)
weatherObject.send();

weatherObject.onload = function () {
    var currentForcast = JSON.parse(weatherObject.responseText);
    console.log(currentForcast);
var windChill = 35.74 + 0.6215 * currentForcast.main.temp - 35.75 * Math.pow(currentForcast.wind.speed, 0.16) + 0.4275 * currentForcast.main.temp * Math.pow(currentForcast.wind.speed, 0.16);



    document.getElementById('currenttemp').innerHTML = currentForcast.main.temp;
    document.getElementById("windChill").innerHTML = windChill.toFixed(2);
    document.getElementById('windSpeed').innerHTML = currentForcast.wind.speed;
}

//cache county id: 5772317 boston id: 4183849 seattle id: 5809844 Rexburg id: 5599930