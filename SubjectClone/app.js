var nav_bar = document.getElementsByClassName("header-nav");
var left_container = document.getElementsByClassName('left-container-chapter');
var title_bar = document.getElementById("title-bar");

window.addEventListener("scroll", function() {
    
    var scroll_y = this.scrollY;
    var top_title = 80;

    var tmp = 0;
    tmp = top_title - scroll_y;
    
    if (tmp < 0) {
        tmp = 0;
    }

    title_bar.style.top = tmp.toString() + "px";
    left_container.item(0).style.top = tmp.toString() + "px";

});