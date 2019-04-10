import json from 'temples.json';
var loganData = "";
loganData.onload = function () {
    var loganServices = JSON.stringify(json);
    console.log(loganServices);

    document.getElementById('service1').innerHTML = loganServices.services.name;
    document.getElementById("service2").innerHTML = loganServices.services(2).name(2);
}