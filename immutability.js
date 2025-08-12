let movie = {
  title: "Merah Putih",
  rating: 0,
};

function rateMovieImmutability(movie, rate) {
  const getRate = Object.assign({}, movie, {
    rate,
  });

  return getRate;
}

// Mutable
function rate(movie, rating) {
  const getRate = (movie.rating = rating);
  return getRate;
}

console.log(`Sebelum rate : ${movie.rating}`);

const rating = rateMovieImmutability(movie, 500).rate;

console.log(`Mutate rate : ${rating}`);
console.log(`Setelah rate : ${movie.rating}`);
