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
  
  if (mouseY < viewportH/2) {
    text = "green with spring"
    document.getElementById("t").style.color = "limegreen"
  }
  else {
    text = "yellow with fall";
    document.getElementById("t").style.color = "yellow" 

  }
  
  document.getElementById("t").innerText = text;
   ;
}
