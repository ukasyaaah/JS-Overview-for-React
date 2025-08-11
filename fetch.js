const user = fetch("https://api.github.com/users/ukasyaaah");

user
  .then((e) => e.json())
  .then((e) => {
    console.log(`Username : ${e.login}`);
    console.log(`Name : ${e.name}`);
    console.log(`Location : ${e.location}`);
  }).catch(e => console.log(e));
