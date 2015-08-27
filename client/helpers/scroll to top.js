

/*Scroll to top button*/
Template.layout.onRendered(function(){
    $(window).scroll(function(){
        if ( $(this).scrollTop() >= 500 ) {
            $(".Top").fadeIn();
        }
        else {
            $(".Top").fadeOut();
        }
    });
    $(".Top").click(function(){
        $("html,body").stop().animate({scrollTop : 0});
    });
});

//this is where we apply opacity to the arrow
Template.scrolldown.onRendered(function() {
    $(window).scroll(function(){

        //get scroll position
        var topWindow = $(window).scrollTop();
        //multipl by 1.5 so the arrow will become transparent half-way up the page
        var topWindow = topWindow * 1.5;

        //get height of window
        var windowHeight = $(window).height();

        //set position as percentage of how far the user has scrolled
        var position = topWindow / windowHeight;
        //invert the percentage
        position = 1 - position;

        //define arrow opacity as based on how far up the page the user has scrolled
        //no scrolling = 1, half-way up the page = 0
        $('.arrow-wrap').css('opacity', position);

    });
});

//Code for smooth scrolling:
Template.aboutme.onRendered(function() {
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
});