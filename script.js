document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const box = document.querySelector(".box");
  const colorButton = document.getElementById("changeColor");
  const toggleButton = document.getElementById("toggleImage");
 
 
  colorButton.addEventListener("click", () => {
    box.style.backgroundColor = 
      box.style.backgroundColor === "black" ? "darkorange" : "black"; 
  });
 
 
 
  let toggled = false;
  toggleButton.addEventListener("click", () => {
    if (toggled) {
      gallery.src = "assets/image1.jpg";
      toggled = false;
    } else {
      gallery.src = "assets/pumpkin.jpg"; 
      toggled = true;
    }
  });
 
 
 
  console.log("Page loaded!");
});
