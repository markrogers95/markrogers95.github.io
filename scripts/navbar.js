/*Script to alter navbar based on three events:
 *
 *   1. Window resize.
 *   2. Window load.
 *   3. Window scroll.
 * 
 * Two functions defined, navScroll and checkSize with the latter
 * applying to options 1 & 2, and the latter applying to option 3.
 * 
 * Both functions alter the appearance and behaviour of the navbar 
 * in line with specific window sizes.
 * 
 */

function checkSize(){

    var nav = document.getElementById("global-nav");
    var rectShow = document.getElementsByClassName("activeRect");

    if ($(window).width() <= 767){

        for (var i = 0; i < rectShow.length; i++){
            rectShow[i].style.display = 'none';
          }

        nav.classList.add("bg-dark");
        }
    else{

        for (var i = 0; i < rectShow.length; i++){
            
            rectShow[i].style.display = 'block';
          }

        if (nav.classList.contains("bg-dark")){

            nav.classList.remove("bg-dark");
        }
    } 
}

function navScroll(){

    if ($(window).width() > 767){

        var navCatch = $(window).scrollTop();
        var nav = document.getElementById("global-nav");

        if (navCatch > 100){

            nav.classList.add("bg-dark");
            nav.classList.add("scrolled");
        }
        else{
            nav.classList.remove("scrolled");
            nav.classList.remove("bg-dark");
        }
    }
};

window.onscroll = function() {navScroll()};
window.onresize = function() {checkSize()};
window.onload = function() {this.checkSize()};