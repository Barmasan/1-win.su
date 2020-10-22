var acc = document.getElementsByClassName("accordion__button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.style.borderRadius = "8px";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.style.borderRadius = "8px 8px 0 0";
      
    }
  });
}
