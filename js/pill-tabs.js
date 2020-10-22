function openPillTab(evt, pillTabName) {
    // Declare all variables
    let j, pillTabcontent, pillTablinks;
  
    // Get all elements with class="pillTabcontent" and hide them
    pillTabcontent = document.getElementsByClassName("b-pill-tabs__content");
    for (j = 0; j < pillTabcontent.length; j++) {
      pillTabcontent[j].style.display = "none";
    }
  
    // Get all elements with class="pillTablinks" and remove the class "active"
    pillTablinks = document.getElementsByClassName("b-pill-tabs__button");
    for (j = 0; j < pillTablinks.length; j++) {
      pillTablinks[j].className = pillTablinks[j].className.replace(" b-pill-tabs__button_active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(pillTabName).style.display = "block";
    evt.currentTarget.className += " b-pill-tabs__button_active";
  }

  document.getElementById("defaultOpenP").click();