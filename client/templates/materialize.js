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
        barColor: '#1abc9c',
        trackColor: "#ecf0f1",
        size: 160,
        animate: 500
    });
});

ShareIt.configure({
    useFB: true,          // boolean (default: true)
                          // Whether to show the Facebook button
    useTwitter: true,     // boolean (default: true)
                          // Whether to show the Twitter button
    useGoogle: true,      // boolean (default: true)
                          // Whether to show the Google+ button
    classes: "share", // string (default: 'large btn')
                          // The classes that will be placed on the sharing buttons, bootstrap by default.
    iconOnly: true,      // boolean (default: false)
                          // Don't put text on the sharing buttons
    applyColors: false     // boolean (default: true)
                          // apply classes to inherit each social networks background color
});
/*

 Template.resume.onRendered(function(){
 //without $(document).ready
 $(".cv").slideUp();
 });
 document.querySelector( "#nav-toggle" )
 .addEventListener( "click", function() {
 this.classList.toggle( "active" );
 });*
 Template.welcome.onRendered(function () {
 var app;
 $(document).ready(function () {
 return app.init();
 });
 app = {
 text: ' Hi, I am Maria Nemcova, front end web developer & web designer',
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
 */