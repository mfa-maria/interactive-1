// Get viewport width and height
let viewportW = window.innerWidth;
let viewportH = window.innerHeight;

// try changing "mousemove" to "click"
document.addEventListener("mousemove", update, false);
document.addEventListener("scroll", update, false);

function update(e) {
  let mouseY = e.clientY;
  let scrollY = window.scrollY;
  let text = "";
  
  let scrollPercentage = (scrollY / (document.documentElement.scrollHeight - viewportH)) * 100;

  if (mouseY < viewportH/2) {
    text = "green with spring"
  }
  else {
    text = "yellow with fall";
  }
  
  document.getElementById("t").innerText = text;
  
  let hue = (scrollPercentage * 2) % 360; // Adjusting the value for the hue
  document.getElementById("haiku").style.color = "limegreen";
}
