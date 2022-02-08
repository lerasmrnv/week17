"use strict";

let btn = document.querySelector('.btn');
btn.addEventListener('click', newArr);

function newArr(){
    let arr = [];

for (let i=0; i < 10; i++) {
    arr.push(Math.round((Math.random()*10 + Math.random()*(-10))));
}

    let array = 'Сгенерировали: ' + arr;
    let min = 'Минимальное число: ' + Math.min.apply(null,arr);
    let max = 'Максимальное число: ' + Math.max.apply(null, arr);
    let sum =  arr.reduce((total, amount) => total+amount);
    let average = 'Среднее арифметическое: ' + sum/arr.length;
    let multiply= 'Произведение чисел: ' + arr.reduce((total, amount) => total*amount);


console.log(arr);
console.log(min);
console.log(max);
console.log(average);
console.log(multiply);

document.getElementById("arr").innerHTML = array;
document.getElementById("min").innerHTML = min;
document.getElementById("max").innerHTML = max;
document.getElementById("average").innerHTML = average;
document.getElementById("multiply").innerHTML = multiply;
}

