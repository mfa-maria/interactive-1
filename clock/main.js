//loop for the rectangles on the left
for (i = 0; i < 20; i ++){
  let element = document.createElement("div");
  element.classList.add("rect");
  document.querySelector(".overlayleft").appendChild(element);
}

for (i = 0; i < 13; i ++){
  let element = document.createElement("div");
  element.classList.add("rect2");
  document.querySelector(".overlayright").appendChild(element);
}


//function for the change over seconds 
function updateTime() {
  let d = new Date();
  let sec = d.getSeconds();       
  console.log (sec + "sec"); 
  
  // if the current second is less than 30, then animate backgrounds, don't show overlay yet 
  // if the current second is more than 30, then animate overlays

  if (sec < 30) {
    // sec ranges from 0-29
    // opacity to range from 0-1
    // console.log(sec / 30);
    document.querySelector(".backgroundleft").style.opacity =   sec / 30; 
    document.querySelector(".backgroundright").style.opacity =   sec / 30;
    
  } else  {
    // sec ranges from 30-59
    //opacity to range from 0-0.5
    // 30/
    console.log( 15 / sec);
    document.querySelector(".overlayleft").style.opacity =   15 / sec;
    document.querySelector(".overlayright").style.opacity =   15 / sec;
  
    }
}


// run the above function every second
setInterval(updateTime, 1000);






// setTimeout(function() {
 //    let rectangles = document.querySelectorAll('.rect');
 //  }, 6000); 