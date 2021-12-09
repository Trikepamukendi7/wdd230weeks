
document.querySelector(".banner_close").addEventListener("click", function () {
    this.closest(".banner").remove();
  });
  
  
  var today = new Date();
  if(today.getDay() != 5) {
    const excellent = document.querySelector("#excellent")
    friday.remove()
  }