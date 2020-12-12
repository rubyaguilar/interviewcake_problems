let x = 2;
let y = 8;
const a = function(b) {
  return function(c) {
    return x + y + Math.abs(b) + c;
  }; 
};


if(fn < 10  || fn > 20){
    fn = a(x)
}

const fn = a(x);
x = 4;
console.log(fn(Math.random() * 10));