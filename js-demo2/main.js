console.log('hello world');

// //for (i = 0; i<20; i++){
// //
// 	//console.log(i * 10);
// 	//let hue = i * 10;
// 	//let rotation = i * 1;
// 	//let width = i * 30;

// 	// 1. create an element 
// //	let element = document.createElement("div");

// 	//2. add a class name "rect"to the element 
// 	//element.classList.add("rect");

// //	element.style.backgroundColor = "hsl("+ hue + ", 100%, 50%)";
// //	element.style.transform= "rotate(" + rotation + "deg)";
// 	//element.style.width = width + "px";
// 	//3. append the element ot the document 
// //	document.querySelector(".container").appendChild(element);
// }

//create new html element/div
 
 for(j=0; j < 20; j++){
 	console.log("a new j begings");

 	for (i = 0; i<10; i++){
	  	console.log("j: "+ j + ", i:" + i);
	  	let element = document.createElement("div");
	  	//assugn class name 'rect' to the element 
	  	element.classList.add("rect");
	  	if (i==5) {
	  		element.style.borderRadius = "20px";
	  	}
	  	if (i>6){
	  		element.style.backgroundColor = "blue";
	  	}
	  	else{
	  		element.style.backgroundColor = "hsl("+ i * 10 + ", 100%, 50%)";
	  	}
	  	//append the element to the parent element 'container'
	  	document.querySelector(".container").appendChild(element);
    }
    let breaker = document.createElement("div");
    breaker.classList.add("clear");
    document.querySelector(".container").appendChild(breaker);


  }
