document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const box = document.querySelector(".box");
  const colorButton = document.getElementById("changeColor");
  const toggleButton = document.getElementById("toggleImage");
 
 
  colorButton.addEventListener("click", () => {
    bx.style.backgroundColor = "blue"; 
  });
 
 
 
  let toggled = false;
  toggleButton.addEventListener("click", () => {
    if (toggled) {
      gallery.src = ".assets/image1.png";
      toggled = false;
    } else {
      gallery.src = "assets/pumpkin.jpg"; 
      toggled = true;
    }
  });
 
 
 
  console.log("Page loaded!");
});
