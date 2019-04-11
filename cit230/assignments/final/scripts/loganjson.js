var family = new XMLHttpRequest();
family.open('GET', 'https://thenoblehatch26.github.io/cit230/assignments/final/json/test.json', true)
family.send();

family.onload = function () {
var loganServices = JSON.stringify(family);
    console.log(family);
    console.log("this is a test");
    console.log(loganServices[0].name);

document.getElementById('service1').innerHTML = loganServices;
document.getElementById("service2").innerHTML = loganData[2].name;
}












// var loganData = new XMLHttpRequest();
// loganData.open('GET', 'https://thenoblehatch26.github.io/cit230/assignments/final/json/temples.json')
// loganData.send();


//     var loganServices = JSON.stringify(loganData);
//     console.log(loganServices);
//     console.log("this is a test");
//     console.log(loganData[0].name);

// document.getElementById('service1').innerHTML = loganServices;
// document.getElementById("service2").innerHTML = loganData[2].name;
