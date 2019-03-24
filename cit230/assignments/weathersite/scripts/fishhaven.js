var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5585000&appid=63d7b710055757e4b59628d0938f81f3&units=imperial', true)
weatherObject.send();

weatherObject.onload = function () {
    var currentForcast = JSON.parse(weatherObject.responseText);
    console.log(currentForcast);

//                                                  ||
//                                                  ||
//                                                 \  /
//                                                  \/  this is how you call a variable in another object!! 
var windChill = 35.74 + 0.6215 * currentForcast.main.temp - 35.75 * Math.pow(currentForcast.wind.speed, 0.16) + 0.4275 * currentForcast.main.temp * Math.pow(currentForcast.wind.speed, 0.16);



    document.getElementById('currenttemp').innerHTML = currentForcast.main.temp;
    document.getElementById("windChill").innerHTML = windChill.toFixed(2);
    document.getElementById('windSpeed').innerHTML = currentForcast.wind.speed;
}
// end of the function

//Bear lake county - (fish haven):5585000
//soda springs - 5678757
//preston id - 5604473


 
var forcastObject = new XMLHttpRequest();
forcastObject.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5585000&appid=63d7b710055757e4b59628d0938f81f3&units=imperial', true)
forcastObject.send();

forcastObject.onload = function () {
    var weatherForcast = JSON.parse(forcastObject.responseText);
    console.log(weatherForcast);

    document.getElementById('day1').innerHTML = weatherForcast.list["0"].main.temp;
    document.getElementById('day2').innerHTML = weatherForcast.list["1"].main.temp;
    document.getElementById('day3').innerHTML = weatherForcast.list["2"].main.temp;
    document.getElementById('day4').innerHTML = weatherForcast.list["3"].main.temp;
    document.getElementById('day5').innerHTML = weatherForcast.list["4"].main.temp;

}
// end of the function