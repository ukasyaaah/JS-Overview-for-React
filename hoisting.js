console.log(a);
hello();

var a = 10;
function hello() {
  console.log(`Hello minh`);
}

///
function ab(n) {
  return console.log(n + 1);
}

function bb(n) {
  return ab(n);
}

function plus1(n) {
  return bb(n);
}

plus1(11);
