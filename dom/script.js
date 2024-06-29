console.log("from script file");

var h1Element = document.getElementsByClassName("section-1")[0];

// h1Element.style.color = "red";

// var h1ChildElement = document.getElementsByClassName("section-2")[0];

var h1ChildElement = document.querySelectorAll("h1")[0];

h1ChildElement.style.color = "dodgerblue";

// const pr = new Promise((resolve, reject) => {
//   resolve();
//   reject();
// });

// pr.then(() => {
//   console.log("Resolved");
// })
//   .then(() => {})
//   .then(() => {});

const alpha = async () => {
  setTimeout(() => {
    console.log("Hola");
  }, 2000);
  return "Divyansh";
};

const result1 = async () => {
  alpha().then((resp) => resp);
  // .then((resp1) => resp1)
  // .then((resp2) => resp2);
};

const add = (a, b) => {
  return a + b;
};

const result2 = async () => {
  const resp = await alpha();
  //   const resp1 = await resp();
  //   const resp2 = await resp1();

  const sum = add(5, 6);
  console.log("🚀 ~ resp:", resp, sum);
};

result1();
result2();

// function alpha() {}

// const alpha = () => {};
