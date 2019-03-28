///////////////////////////////////////////////////////////////////////////////////////



var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=63d7b710055757e4b59628d0938f81f3&units=imperial', true)
weatherObject.send();

weatherObject.onload = function () {
    var currentForcast = JSON.parse(weatherObject.responseText);
    console.log(currentForcast);

    document.getElementById('preston-currenttemp').innerHTML = currentForcast.main.temp;
    document.getElementById('preston-windSpeed').innerHTML = currentForcast.wind.speed;
    document.getElementById('preston-windChill').innerHTML = currentForcast.weather["0"].main;
//                                                  ||
//                                                  ||
//                                                  \/  this is how you call a variable in another object!! 
    var windChill = 35.74 + 0.6215 * currentForcast.main.temp - 35.75 * Math.pow(currentForcast.wind.speed, 0.16) + 0.4275 * currentForcast.main.temp * Math.pow(currentForcast.wind.speed, 0.16);

    document.getElementById("preston-windChill").innerHTML = windChill.toFixed(2);

}

var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5678757&appid=63d7b710055757e4b59628d0938f81f3&units=imperial', true)
weatherObject.send();

weatherObject.onload = function () {
    var currentForcast = JSON.parse(weatherObject.responseText);
    console.log(currentForcast);

    document.getElementById('sodasprings-currenttemp').innerHTML = currentForcast.main.temp;
    document.getElementById('sodasprings-windSpeed').innerHTML = currentForcast.wind.speed;
    document.getElementById('sodasprings-windChill').innerHTML = currentForcast.weather["0"].main;
//                                                  ||
//                                                  ||
//                                                  \/  this is how you call a variable in another object!! 
    var windChill = 35.74 + 0.6215 * currentForcast.main.temp - 35.75 * Math.pow(currentForcast.wind.speed, 0.16) + 0.4275 * currentForcast.main.temp * Math.pow(currentForcast.wind.speed, 0.16);

    document.getElementById("sodasprings-windChill").innerHTML = windChill.toFixed(2);

}

var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5585000&appid=63d7b710055757e4b59628d0938f81f3&units=imperial', true)
weatherObject.send();

weatherObject.onload = function () {
    var currentForcast = JSON.parse(weatherObject.responseText);
    console.log(currentForcast);

    document.getElementById('fishhaven-currenttemp').innerHTML = currentForcast.main.temp;
    document.getElementById('fishhaven-windSpeed').innerHTML = currentForcast.wind.speed;
    document.getElementById('fishhaven-windChill').innerHTML = currentForcast.weather["0"].main;
//                                                  ||
//                                                  ||
//                                                  \/  this is how you call a variable in another object!! 
    var windChill = 35.74 + 0.6215 * currentForcast.main.temp - 35.75 * Math.pow(currentForcast.wind.speed, 0.16) + 0.4275 * currentForcast.main.temp * Math.pow(currentForcast.wind.speed, 0.16);

    document.getElementById("fishhaven-windChill").innerHTML = windChill.toFixed(2);

}