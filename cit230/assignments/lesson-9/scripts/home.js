var section = document.querySelector('section');


var requestURL = 'https://api.openweathermap.org/data/2.5/group?id=5604473,5678757,5585000&appid=63d7b710055757e4b59628d0938f81f3&units=imperial';
var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

var townName = JSON.parse(requestURL);

document.getElementsById('preston').innerHTML = townName.towns;