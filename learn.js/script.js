// let c = 69;
// let d = 97;
// console.log( "c+d is",c+d );
// const name= "anuj";

// data types
let a = 23;
// a =a+1;
// console.log(a);

// a=a+1;
// console.log(a)
a = Boolean(a);
const age = 12;
const isAdult = age < 18 ? "Child" : "Adult";

/*
 switch (age) {
    case 12:
        console.log("nabalik")
        break;
    case 18:
        console.log("balik");
    default:
        console.log("patani");
        break;
 }

 for(let i=0;i<10;i++){
    console.log(i);
 }

 let x = 0;
 while(x<10){
    console.log(x)
    if(x%2==0) continue;
    if(x==8) break;
    x++
 }

const square = function(num){
    return num*num
}


const square = (num) => num*num;

const greet = (name)=>{
    console.log(`Hi ${name}`)
}

const average = (arr)=>{
    const n = arr.length

    const sum = (arr,n)=>{
        let sum = 0;
        for(let i=0;i<n;i++)  sum+=arr[i]

        return sum
    }

    return sum(arr,n)/n
}

function average(arr){
    const n = arr.length

    function sum(arr,n){
        let sum = 0;
        for(let i=0;i<n;i++)  sum+=arr[i]

        return sum
 }

 return sum(arr,n)/n;
}

function sum(num1,num2){
    if(typeof(num1) != Number || typeof num2 != Number ) return -1;

    return num1 + num2
}

*/

const user = {
  name: "Harsh",
  age: 22,
  isLogin: false,
};

const getStatus = (user, onSuccess, onError) => {
  if (user.isLogin) {
    onSuccess("Secret token");
  } else {
    onError("Sign in error");
  }
};

getStatus(
  user,
  (token) => {
    console.log(token);
  },
  (errorMessage) => {
    console.log(errorMessage);
  }
);

console.log("the value of a is", arr);
console.log("the type of a is", typeof a);
