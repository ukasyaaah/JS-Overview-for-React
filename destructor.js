// array destructor
const [e1] = ["kucing", "kuda"];
console.log(e1); // kucing

const [, e2] = ["kucing", "kuda"];
console.log(e2); // kuda

// object destructuring
const Movie = {
  dir: "Ari Aster",
  movies: ["Hereditary", "Midsommar"],
};

const { dir, movies } = Movie;
console.log(movies);

// object literal enhancement
const title = "Pergi";
const author = "Tere Liye";

const book = { title, author };

//// spread operator
// gabungin 2 array
const makanan = ["nasgor", "sate"];
const minuman = ["teh", "sirop"];
const menu = [...makanan, ...minuman];
console.log(menu);

/// object baru
const makan = {
  sarapan: "Lontong + Opor",
  makanSiang: "Nasi Goreng",
};

const makanMalam = "Gudeg";
const menuHarian = {
  ...makan,
  makanMalam,
};
console.log(menuHarian);

// ambil sisa
const buah = ["apel", "nanas", "pisang"];
const [buahPertama, ...buahSisa] = buah;
console.log(buahSisa);
