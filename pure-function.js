const userHani = {
  name: "Hani",
  allowRead: false,
  allowWrite: false,
};

const enable = function () {
  (userHani.allowRead = true), (userHani.allowWrite = true);
  return userHani;
};

//pure function
// -> minimal punya 1 argumen
// -> di isolasi dulu
const enablePure = function (user) {
  (user.allowRead = true), (user.allowWrite = true);
  return user;
};

console.log(` sebelum : ${userHani.allowRead}`);
console.log(` enabled permission : ${enable(userHani).allowRead}`);
console.log(` setelah : ${userHani.allowRead}`);
