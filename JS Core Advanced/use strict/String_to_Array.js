'use strict';
let str = "Шла! Саша;по шоссе,и сосала, сушку:";
let arr = str.split(/[ ;.,:!?]+/).filter(Boolean);
console.log(arr);
