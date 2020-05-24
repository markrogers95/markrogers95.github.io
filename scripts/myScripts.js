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

var scrollCount = 0;
var currentState = 0;

function checkSize(){

    var nav = document.getElementById("global-nav");
    var rectShow = document.getElementsByClassName("activeRect");

    if ($(window).width() <= 767){

        for (var i = 0; i < rectShow.length; i++){
            rectShow[i].style.display = 'none'
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

function mainCheck(){

    var foot = document.getElementById("footer");
    
    var footDist = $(window).scrollTop();
    var optional = document.getElementById("optional");

   

    if (footDist < 100){
        foot.style.display = 'none';
    }
    else foot.style.display = 'block';

    if ($(window).height() < 500 || $(window).width() < 430){
        optional.style.display = 'none';
    }
    else optional.style.display = 'block';
};

function adjust(){

    console.log("Here we are");
    
    if (scrollCount == 0){
        $("html, body").animate({ scrollTop: 0 }, 0);
        console.log("Adjusted to top");
    }
    if (scrollCount == 1){
        $('html, body').animate({
            scrollTop: ($('#abLoc').offset().top)
        },0);
        console.log("Adjusted to about");
    }
    if (scrollCount == 2){
        $('html, body').animate({
            scrollTop: ($('#projLoc').offset().top)
        },0);
        console.log("Adjusted to projects");
    }
}

$("a[href='#aboutBut']").click(function() {
    $('html, body').animate({
        scrollTop: $("#abLoc").offset().top  + $(this).height() / 2
    }, 500);
    console.log("Clicked");
    scrollCount = 1;
});

$("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
    scrollCount = 0;
    return false;
  });

$("a[href='#projectBut']").click(function() {
    $('html, body').animate({
        scrollTop: $("#projLoc").offset().top  + $(this).height() / 2
    }, 500);
    console.log("Clicked");
    scrollCount = 2;
});

window.onscroll = function() {navScroll(); mainCheck();};
window.onresize = function() {checkSize(); mainCheck(); adjust();};
window.onload = function() {checkSize(); mainCheck();};