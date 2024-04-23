//accessing the elements in html file
/*const myBody = document.body;

console.log(myBody)

const box2 = document.getElementById('box-2');

console.log(box2);

const divs = document.getElementsByTagName('div');

console.log(divs);

const boxes = document.getElementsByClassName('random');

console.log(boxes);

const random = document.querySelectorAll('.container .random'); // the parameter means we need only random inside the container

console.log(random);*/

// changes to made after accessing the element
 const box1 = document.getElementById('box-1')
 //box1.innerhtml = "<h1>hello</h1> <p>Hello Aman</p>"
 box1.style.backgroundColor ="red"// in js we change - to camelcase to take command of css attributes
 
 const boxes = document.getElementsByClassName('box');

 for(let i = 0; i<boxes.length; i++) {
    boxes[i].classList.add(round-border);
 }