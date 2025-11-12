'use strict';
for(let i = 0; i < 1; i++) {
var a = "Ты меня видишь(var)?";
}
console.log(a);

for(let j = 0; j < 1; j++) {
let b = "А меня видишь(let)?";
}
try {
  console.log(b);
} catch (err) {
  console.log(err.message);
}

for(let k = 0; k < 1; k++) {
const c = "А меня(const)?";
}
try {
  console.log(c);
} catch (err) {
  console.log(err.message);
}