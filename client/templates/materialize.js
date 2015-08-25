//sidebar mobile
Template.header.onRendered(function(){
    $('.button-collapse').sideNav({
            menuWidth: 150, // Default is 240
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );
});



Template.portfolio.onRendered(function(){
    //without $(document).ready
    $('.materialboxed').materialbox();
});

//hamburger
Template.header.events({
    'click #nav-toggle': function(e) {
        e.preventDefault();
        $("#nav-toggle").toggleClass( "active" );
    }
});

//Chart skills
Template.myskills.onRendered(function() {
    $('.chart').easyPieChart({
        scaleColor: "#ecf0f1",
        lineWidth: 20,
        lineCap: 'butt',
        barColor: '#7092BE',/*#1abc9c*/
        trackColor: "#ecf0f1",
        size: 160,
        animate: 1000
    });
});

/*share*/
ShareIt.configure({
    useFB: true,          // boolean (default: true)
                          // Whether to show the Facebook button
    useTwitter: true,     // boolean (default: true)
                          // Whether to show the Twitter button
    useGoogle: true,      // boolean (default: true)
                          // Whether to show the Google+ button
    classes: "share",    // string (default: 'large btn')
    // The classes that will be placed on the sharing buttons, bootstrap by default.
    iconOnly: true,      // boolean (default: false)
    // Don't put text on the sharing buttons
    applyColors: false,     // boolean (default: true)
    // apply classes to inherit each social networks background color
    faSize: '',            // font awesome size
    faClass: ''       // font awesome classes like square
});

ShareIt.configure({
    sites: {                // nested object for extra configurations
        'facebook': {
            'appId': null   // use sharer.php when it's null, otherwise use share dialog
        },
        'twitter': {},
        'googleplus': {},
        'pinterest': {}
    }
});

Template.header.helpers({
    shareData: function() {
        return {
            title: this.data,
            author: Meteor.users.findOne(this.authorId)
        }
    }});

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
Template.aboutme.onRendered(function() {
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

//Code stolen from css-tricks for smooth scrolling:
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

//Writing text
 Template.welcome.onRendered(function () {
         var app;
     Template.welcome.onRendered(function () {
             return app.init();
         });

         app = {
             text: 'Hello stranger. How are you doing?',
             index: 0,
             chars: 0,
             speed: 100,
             container: '.text .content',
             init: function () {
                 this.chars = this.text.length;
                 return this.write();
             },
             write: function () {
                 $(this.container).append(this.text[this.index]);
                 if (this.index < this.chars) {
                     this.index++;
                     return window.setTimeout(function () {
                         return app.write();
                     }, this.speed);
                 }
             }
         };
     }.call(this));

//Galerry fancy
Template.portfolio.onRendered(function($) {
    $('.fancybox').fancybox({
        padding : 0,
        openEffect  : 'elastic',
        margin : [20, 60, 20, 60]
    });
});

/*BLOG*/
if (Meteor.isServer) {
    Blog.config({
        adminRole: 'blogAdmin',
        authorRole: 'blogAuthor'
    });
}

if (Meteor.isClient) {
    Blog.config({
        comments: {
            disqusShortname: 'myshortname'
        }
    });
}

if (Meteor.isClient) {
    Blog.config({
        comments: {
            useSideComments: true,
            allowAnonymous: true
        }
    });
}

if (Meteor.isClient) {
    Blog.config({
        blogIndexTemplate: 'myBlogIndexTemplate',
        blogShowTemplate: 'myShowBlogTemplate'
    });
}

if (Meteor.isClient) {
    Blog.config({
        blogNotFoundTemplate: 'myNotFoundTemplate'
    });
}

/*Animation */
Template.lulu.onRendered(function(e) {
    $(".la").animate({
        left: '250px'
    });
});
/*
Template.portfolio.onRendered(function() {
    $(document).delegate('#my-lightbox', 'click', function(event) {
        event.preventDefault();
        return $(this).ekkoLightbox();
    });
});

Template.welcome.onRendered(function(){
 //without $(document).ready
 $(".cv").slideUp();
 });
 document.querySelector( "#nav-toggle" )
 .addEventListener( "click", function() {
 this.classList.toggle( "active" );
 });*/


