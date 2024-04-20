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

/*function userIdApiCall() {
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
/*
  1. Create a array of books where book is a object with properties id,title,author,price(in rs)
  2. Write functions to perform CRUD operations on this array (Create Read Update Delete)
     a. A function to get all books based on the author we provide to this function
     b. A function to update any book details based on its id
     c. A function to get details of any book based on its id
     d. A function to get All Books in descending order of its price
*/
const books = [
  {
    id: 1,
    title: "naruto",
    author: "aman",
    price: 234,
  },
  {
    id: 2,
    title: "how i met your mother",
    author: "aman",
    price: 1200,
  },
  {
    id: 3,
    title: " fifty shades of grey",
    author: "aman",
    price: 1000,
  },
  {
    id: 4,
    title: "reproductive organs",
    author: "harsh",
    price: 300,
  },
  {
    id: 5,
    title: "iq option",
    author: "harsh",
    price: 150,
  },
  {
    id: 6,
    title: "ironman",
    author: "harsh",
    price: 500,
  },
];

function getBooksByAuthor(author){
   books.forEach(book => {
    if(book.author === author)
    book.push()
  return books;
   });
}