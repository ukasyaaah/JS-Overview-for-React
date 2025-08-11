const test = new Promise((resolve, reject) => {
  console.log(`Mencari data`);
  const data = "g";
  setTimeout(() => {
    if (data) {
      resolve(`Data ditemukan : ${data}`);
    } else {
      reject(`Data ga ditemuin`);
    }
  }, 2000);
});

async function getData() {
  try {
    console.log(await test);
  } catch (e) {
    console.log(`Error : ${e}`);
  } finally {
    console.log("Selesai");
  }
}

getData();
