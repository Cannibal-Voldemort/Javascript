//we can pass only one data in resolve if we want to pass more data then make that thing a object

/*const ticket = new Promise(function (success, error) {
  const isBoarded = true;
  if (isBoarded) {
    console.log("you are in the flight");
  } else {
    console.log("Your flight has been cancelled");
  }
});
ticket
  .then((data) => {
    console.log("yeah", data);
  })
  .catch((data) => {
    console.log("oh no", data);
  })
  .finally((data) => {
    console.log("i will be executed");
  });*/

function getcheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = '🧀';
      resolve(cheese);
    }, 2000);
  });
}
function makedough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + '🧇';
      resolve(dough);
    }, 2000);
  });
}
function bakepizza(dough) {
  return new Promise((resolve, reject) => {
    const pizza = dough + '🍕';
    resolve(pizza);
  });
}
/*getcheese()
  .then((cheese) => {
    console.log("here is the cheese", cheese);
    return makedough(cheese);
  })
  .then((dough) => {
    console.log("here is the dough",dough);
    return bakepizza(dough);
  })
  .then((pizza) => {
    console.log("here is the pizza", pizza);
  });*/
  async function orderPizza(){
    const cheese = await getcheese();
    console.log("here is the cheese", cheese);
    const dough = await makedough(cheese)
    console.log("here is the dough", dough)
    const pizza = await bakepizza(dough);
    console.log("here is the pizza", pizza);
  } 
  orderPizza();