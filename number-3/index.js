"use strict";

function formatDate(date) {
    let diff = new Date() - date;

    if (diff < 1000) {
        return 'Прямо сейчас';
    }

    let s = Math.floor(diff/1000);
    if (s < 60) {
        return s + ' сек. назад';
    }

    let min = Math.floor(s/60);
    if (min < 60) {
        return min + ' мин. назад';
    }

    let day = date;
    day = ['0'+ day.getDate(), '0'+ (day.getMonth() + 1), '0'+ day.getFullYear(), '0'+ day.getHours(), '0'+ day.getMinutes()].map(el => el.slice(-2));
return 'Вчерашняя дата вроде ' + day.slice(0, 3).join('.') + ' ' + day.slice(3).join(':');

    
}


 console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400* 4 * 1000)) );