'use strict';
console.log("hello");

function clock(){
    console.log("hello2");
    var hours = document.getElementById('hrs');
    var minute = document.getElementById('min');
    var second = document.getElementById('sec');

    var h = new Date().getHours();
    var m = new  Date().getMinutes();
    var s = new Date().getSeconds();
    console.log(m);

    hours.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;

}

 var interval = setInterval(clock,1000);