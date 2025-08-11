const test = new Promise((resolve, reject) => {
  console.log("Mencari Data");
  setTimeout(() => {
    data = "";
    if (data == "") {
      reject("Data gagal dicari");
    } else {
      resolve(`Data berhasil diambil : ${data}`);
    }
  }, 2000);
});

test
  .then((data) => console.log(data))
  .catch((err) => {
    const error = new Error(err);
    console.error(error);
  });
