/*Animation in aboutme */
Template.aboutme.onRendered(function(e) {
    $(".la").fadeIn("5000")
    /*.stylesheets('visibility', 'visible')
     .animate({opacity: 1.0}, 3000);*/
});


/*
 //Galerry fancy
 Template.portfolio.onRendered(function($) {
 $('.fancybox').fancybox({
 padding : 0,
 openEffect  : 'elastic',
 margin : [20, 60, 20, 60]
 });
 });

//hamburger
Template.header.events({
    'click #nav-toggle': function(e) {
        e.preventDefault();
        $("#nav-toggle").toggleClass( "active" );
    }
});




 Template.aboutme.onRendered(function(e) {
 $(".two").animate({
 bottom: '250px'
 }, 1000);
 $(".three").animate({
 bottom: '250px'
 }, 1000);
 $(".four").animate({
 top: '250px'
 }, 1000);
 $(".five").animate({
 top: '250px'
 }, 1000);
 });
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


