var section = document.querySelector('section');


var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

var townName = JSON.parse(requestURL);

document.getElementsById('preston').innerHTML = townName.towns;





///////////////////////////////////////////////////////////////////////////////////////



var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=63d7b710055757e4b59628d0938f81f3&units=imperial', true)
weatherObject.send();

weatherObject.onload = function () {
    var currentForcast = JSON.parse(weatherObject.responseText);
    console.log(currentForcast);

    document.getElementById('currenttemp').innerHTML = currentForcast.main.temp;
    document.getElementById('windSpeed').innerHTML = currentForcast.wind.speed;
    document.getElementById('high').innerHTML = currentForcast.main.temp_max;
    document.getElementById('low').innerHTML = currentForcast.main.temp_min;
    document.getElementById('windChill').innerHTML = currentForcast.weather["0"].main;
//                                                  ||
//                                                  ||
//                                                  \/  this is how you call a variable in another object!! 
    var windChill = 35.74 + 0.6215 * currentForcast.main.temp - 35.75 * Math.pow(currentForcast.wind.speed, 0.16) + 0.4275 * currentForcast.main.temp * Math.pow(currentForcast.wind.speed, 0.16);

    document.getElementById("windchill").innerHTML = windChill.toFixed(2);

    var iconcode = currentForcast.weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
}