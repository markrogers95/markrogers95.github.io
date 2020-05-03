$("a[href='#aboutBut']").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#abLoc").offset().top  + $(this).height() / 2
    }, 1500);
    console.log("Clicked");
});

$("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });