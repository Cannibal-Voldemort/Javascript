/*const ticket = new Promise((resolve, reject) => {
  const isBoarded = false;
  if (isBoarded) {
    resolve("You are in the flight");
  } else {
    reject("Your flight has been cancelled");
  }
});*/

// const isEligible = new Promise((onSuccess,onError)=>{
//   const age = 19
//   if(age<18){
//     onError("You're ineligible to vote")
//   }else{
//     onSuccess("You're eligible to vote.")
//   }
// })

// isEligible
// .then((data)=>{
//   console.log(data)
// })
// .catch((data)=>{
//   console.log(data)
// })
// .finally(() =>{
//   console.log("it will be executed no matter what")
// }
// )

function userIdApiCall() {
  return new Promise((s, e) => {
    s("3");
  });
}

function userApiCall(userId) {
  return new Promise((success, error) => {
    if (userId == "1") {
      success({
        name: "Harsh",
        age: 22,
      });
    } else {
      error("User not found");
    }
  });
}

//Sequenced async calls
async function getUser() {
  try {
    const userId = await userIdApiCall();
    const user = await userApiCall(userId);

    console.log(`username : ${user.name}`);
  } catch (error) {
    console.log(`Error : ${error}`);
  }
}

getUser();

//Parallel await calls

function getPosts() {
  return new Promise((s, e) => {
    s([1, 2, 3, 4, 5, 6]);
  });
}

function getMessages() {
  return new Promise((s, e) => {
    s(["Hi", "Hello", "Chut dedo"]);
  });
}

async function onStart() {
  const [posts, messages] = await Promise.all([getPosts(), getMessages()]);

  console.log(`Posts : ${posts} & Messages: ${messages}`);
}

onStart();
