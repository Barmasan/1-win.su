var headerDropdownButton = document.querySelector(".b-header__burger-button");


    headerDropdownButton.addEventListener("click", function () {
        var headerLinks = document.querySelector(".b-header__links");
        if (headerLinks.style.maxHeight) {
            headerLinks.style.maxHeight = null;
        } else {
            headerLinks.style.maxHeight = 700 + "px";
        }
    });



var dropdownButtons = document.querySelectorAll(".b-dropdown");
dropdownButtons.forEach(function(item){
    item.addEventListener('click', function(){
        for (var i = 0; i < this.childNodes.length; i++) {
            if (this.childNodes[i].className == "b-dropdown__content") {
                if(this.childNodes[i].style.display == "block"){
                    this.childNodes[i].style.display = "none";
                    this.style.marginBottom = 10 + 'px';
                    break;
                } else{
                    this.childNodes[i].style.display = "block";
                    this.style.marginBottom = this.childNodes[i].offsetHeight + 10 + 'px';
                    this.style.borderRadius = '10px 10px 0 0';
                    break;
                }
            }        
        }
    })
})