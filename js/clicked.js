var clicked = document.getElementsByClassName("clicked");

document.addEventListener("DOMContentLoaded", function(event) { 
    setTimeout(clickEmAll, 500)
    function clickEmAll(){
        for (var i = 0; i < clicked.length; i++) {
            clicked[i].click();
        }
    }
  });

