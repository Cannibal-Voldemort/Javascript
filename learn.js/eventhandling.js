let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", (evt) => {
  console.log("button was clicked - handler1");
});

btn1.addEventListener("click", (evt) => {
  console.log("button was clicked - handler2");
});

const handler3 = () => {
  console.log("button was clicked - handler3");
};
btn1.addEventListener("click", handler3);

btn1.addEventListener("click", (evt) => {
  console.log("button was clicked - handler4");
});

btn1.removeEventListener("click", handler3);

// to remove any eventlistener we first define it in a variable.
// without using eventlistener
//  btn1.onclick = () => {
// console.log("btn1 was clicked");
// let a = 68;
// a++;
// console.log(a);
// };
// event object give all the information of object

// let div = document.querySelector("div");
//  div.onmouseover = () => {
//   console.log("you are inside my domain");
//  };
