if(ie < 9){
    ieMessage();
}
/*
 * Call functions when dom is ready
 */
$(document).ready(function() {
    // Hide browser top bar in mobiles
    $('body').scrollTop(1);
    // Toggle Navigation for mobile devices
    $('.icon-nav').on('click', function(){
        $('header nav').slideToggle();
        $(this).toggleClass('active');
    });
    // Function to scroll to top
    $('a[href=#top]').click(function(){
        $('html, body').animate({scrollTop:0}, 600, 'easeInExpo');
        return false;
    });
    // Function to fade in image sprites
    $('.sprite').fadeSprite();
    //Function for thumbnail hover effect
    $('.thumbs li').hoverThumb();
    // Function to animate when leaving page
    $('.transition, #nav a, #nav-footer a, #thumbs a, #next a, #prev a, #logo, #face a').leavePage();
    // Preload the page with jPreLoader
    $('body').jpreLoader({
        showSplash: true
    }, function() {
        //Show the page once images are loaded

        // Animate the header first
        $('#header').stop().animate({'opacity': '1', 'top':'0'}, 1000);

        animateMain();
        animateAbout();


    });
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-2290797-3']);
_gaq.push(['_trackPageview']);
(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
