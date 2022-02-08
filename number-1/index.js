"use strict";

let btn = document.querySelector('.btn');
let surname = document.querySelector('.surname');
let username = document.querySelector('.name');
let middleName = document.querySelector('.middle-name');



function check() {
    let s = surname.value.trim();
    let n = username.value.trim();
    let m = middleName.value.trim();
        
    let surnameUpper = s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    let nameUpper = n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
    let middleNameUpper = m.charAt(0).toUpperCase() + m.slice(1).toLowerCase();

    alert(`Фамилия: ${surnameUpper}, Имя: ${nameUpper}, Отчество: ${middleNameUpper}`);
}

btn.addEventListener('click',check);