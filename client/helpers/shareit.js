Template.header.helpers({
    shareData: function() {
        return {
            title: this.data,
        }
    }});

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

