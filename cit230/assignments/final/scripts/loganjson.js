var loganData = new XMLHttpRequest();
loganData.open('GET', 'https://thenoblehatch26.github.io/cit230/assignments/final/json/temples.json', true)
loganData.send();

loganData.onload = function () {
    var loganServices = JSON.stringify(loganData);
    console.log(loganServices);
    console.log("this is a test");


document.getElementById('service1').innerHTML = loganServices[1].name;
document.getElementById("service2").innerHTML = loganData[2].name;
}