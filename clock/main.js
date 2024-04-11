
  function updateTime() {
  let d = new Date();
  let sec = d.getSeconds();       
  let now = sec;
  console.log (now); 
  
  document.querySelector(".backgroundleft").style.opacity =   sec * 0.4 ; 
  document.querySelector(".backgroundright").style.opacity =   sec * 0.4 ; 
  document.querySelector(".container").style.opacity =   sec * 0.01 ;
  document.querySelector(".container2").style.opacity =   sec * 0.01 ;
  
  


  
}

// run the above function every second
setInterval(updateTime, 1000);


for (i = 0; i<20; i++){

console.log(i * 10);
let width = 450;
let margin = 0;
let element = 
document.createElement("div");
element.classList.add("rect");
const fadeDuration = 1000;


  element.style.backgroundColor = "hsl(0, 100%, 25%)";

element.style.width = width + "px";
//  //3. append the element ot the document 
document.querySelector(".container").appendChild(element);

let breaker = document.createElement("div");
breaker.classList.add("clear");
 document.querySelector(".container").appendChild(breaker);

 
}

setTimeout(function() {
    let rectangles = document.querySelectorAll('.rect');
  }, 6000); 

for (j = 0; j<13; j++){

console.log(j * 10);
let width = 450;
let margin = 0;
let element = 
document.createElement("div");
element.classList.add("rect2");
const fadeDuration = 1000;


element.style.backgroundColor = "hsl(0, 100%, 50%)";

element.style.width = width + "px";

document.querySelector(".container2").appendChild(element);
let breaker = document.createElement("div");
breaker.classList.add("clear");
 document.querySelector(".container2").appendChild(breaker);

 
}

setTimeout(function() {
    let rectangles = document.querySelectorAll('.rect2');
  }, 2000); 






