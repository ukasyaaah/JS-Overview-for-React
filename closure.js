let angka = 0;

function counter() {
  let angka = 0;
  return () => angka++;
}

angka = 100;

let count = counter();
console.info(counter());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
count();

//// Tambah angka
function tambahAngka(x) {
  return (y) => console.log(x + y);
}

let tambah5 = tambahAngka(5);

tambah5(10);
tambah5(5);

/// click Handler
function clickHandler(nama) {
  return () => {
    console.log(`${nama} di klikk`);
  };
}

let click1 = clickHandler(1);
click1();
