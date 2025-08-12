/// First class function

//1. disimpan dalam variable -> funct expression
let hello = () => console.log(`Hello`);
hello();

//2. Dikirim sbg argument
function nama(nama, filter) {
  console.log(filter(nama));
}

function toUpper(nama) {
  return nama.toUpperCase();
}
nama("Hani", toUpper);

//3. sbg return value
function kali(x) {
  return (y) => console.log(x * y);
}

let kali2 = kali(2);
kali2(4);

//4. Object yg memiliki property
function contoh() {
  contoh.properti = "Properti Funct";
  contoh.jurusan = "Teknik Informatika";
}
contoh();
console.log(contoh);
console.log(contoh.properti);

// 5. Funct pd properti obj
const user = {
  username: "ukasyaaah",
  sayHello(name) {
    return `Hello ${name}, from ${this.username}`;
  },
};

console.log(user.sayHello("Ari"));
