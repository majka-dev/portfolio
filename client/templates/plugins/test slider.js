var postsData = [
    {
        title: 'PayFacile',
        subtitle:'UI/UX Design',
        subtitle2:'(meteor/material design)',
        url: 'http://www.payfacile.com/',
        description:'In my last project, I was working for company PayFacile. Helping with UI/UX,creating LogIn/Register form and CheckOut page in meteor using google material design.'
    },
    {
        title: 'Hevon',
        subtitle:'Front end dev. UI/UX Design',
        subtitle2:'(meteor/bootstrap)',
        url: 'http://localhost:3000/contact',
        description:'I was working for company Hevon. Creating full Front end website, UI/UX Design using meteor platform & bootstrap.'
    },
    {
        title: "Majka's Art",
        subtitle:'Portfolio website',
        subtitle2:'(PHP/Wordpress)',
        url: 'http://localhost:3000/contact',
        description:'I was working for company PayFacile. Helping with UI/UX,creating LogIn/Register form and CheckOut page in meteor using google material design.'

    }
];
Template.portfolio.helpers({
    posts: postsData
});
/*Template.postItem.helpers({
 domain: function() {
 var a = document.createElement('a');
 a.href = this.url;
 return a.hostname;
 }
 });*/