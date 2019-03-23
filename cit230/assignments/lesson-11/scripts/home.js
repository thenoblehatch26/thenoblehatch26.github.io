var section = document.querySelector('section');


var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

var townName = JSON.parse(requestURL);

document.getElementsById('preston').innerHTML = townName.towns;