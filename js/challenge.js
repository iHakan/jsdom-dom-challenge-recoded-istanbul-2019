//Timer increments every second once the page has loaded.

document.addEventListener("DOMContentLoaded", function(){
  e.preventDefault();
  
  let minusBtn = document.getElementById("minus");
  minusBtn.addEventListener("click", function(){
    
    let seconds = parseInt(document.getElementById("counter").textContent);
    seconds--;
  });
});