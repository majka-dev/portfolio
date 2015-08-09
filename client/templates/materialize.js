Template.header.onRendered(function(){
    //without $(document).ready
    $(".button-collapse").sideNav();
});

Template.portfolio.onRendered(function(){
    //without $(document).ready
    $('.materialboxed').materialbox();
});

/*hamburger*/
Template.header.events({
    'click #nav-toggle': function(e) {
        e.preventDefault();
        $("#nav-toggle").toggleClass( "active" );
    }
});

/*document.querySelector( "#nav-toggle" )
    .addEventListener( "click", function() {
        this.classList.toggle( "active" );
    });*/

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

