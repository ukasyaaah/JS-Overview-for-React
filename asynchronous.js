// 1. asynchronous utk settimeout
console.log("mulai");

setTimeout(() => {
  console.log("Tunggu 5 detik");
}, 5000);

console.log("Selesai");

// 2. eventListener
console.log('anyak');
const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("Tombol di Klik");
});
console.log('rampung');
