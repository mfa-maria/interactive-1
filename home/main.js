 const characters = document.querySelectorAll('.stem-six');

  // function to change characters on mouseover
  function changeCharacter(event) {
    const char = event.target;

    // characters to change to
    const newChars = ['a', 'b', 'c', 'd', 'e', 'f']; // Example emojis

    // Generate a random index to pick a character from the newChars array
    const randomIndex = Math.floor(Math.random() * newChars.length);

    // Change the text content of the character
    char.textContent = newChars[randomIndex];
  }

  // Add event listeners to each character
  characters.forEach(char => {
    char.addEventListener('mouseover', changeCharacter);
  });

