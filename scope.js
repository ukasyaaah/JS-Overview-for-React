// Global scope
let a = 100;

// block scope
{
  let a = 10;
  console.log(a);
}
console.log(a);

// local scope
function contoh() {
  let b = 100;
  console.log(b);
}

b = 200;
console.log(b);
contoh();

// lexical scope
function count() {
  let angka = 0;
  return () => angka++;
}

angka = 100;
let lexical = count();
console.log(lexical());
console.log(lexical());
console.log(lexical());
