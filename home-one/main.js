
/// i want to change text (or characters ) as you hover onto the screen and 
//then change them back) need to find a way to add the link somehow... ;_;

/*const box = document.getElementById("stem-change");

function changeText(){
	event.target.textContent = "find me";
}

change.addEventListener("mouseover", changeText => {
	event.target.textContent = "find me";
});

change.addEventListener("mouseout", changeText => {
	document.getElementById("box");
});*/

const characters = document.querySelectorAll('.stem-change');

characters.forEach(function(char) {
  char.addEventListener('mouseover', function() {
    char.textContent = getRandomCharacter();
  });

 // char.addEventListener('mouseout', function() {
   // char.textContent = char.getAttribute('data-original-char');
//  });

 char.setAttribute('data-original-char', char.textContent);
 });

// Function to get a random character
function getRandomCharacter() {
  const characters = "*hi";
  return characters.charAt(Math.floor(Math.random() * characters.length));
}

const div = document.querySelector(".text");
const text = " welcome to my home";

function textTypingEffect(element, text, i=0){
	if(i==0){
		element.textContent = " ";

	}

	element.textContent += text[i];

	if ( i === text.length - 1){
		return;
	}

	setTimeout(() => textTypingEffect(element, text, i+1), 50);
}

textTypingEffect(div,text);


