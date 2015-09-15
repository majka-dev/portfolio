var postsData = [
    {
        title: 'PayFacile',
        subtitle:'UI/UX Design',
        subtitle2:'(meteor/material design)',
        url: 'http://www.payfacile.com',
        description:'In my last project, I was working for company PayFacile. Helping with UI/UX, creating LogIn Register form and CheckOut page in meteor using material design.',
        url1: 'https://scontent-fra3-1.xx.fbcdn.net/hphotos-xpl1/t31.0-8/11950251_10204576236707424_1427299201547722982_o.jpg',
        url2: 'https://scontent-ams2-1.xx.fbcdn.net/hphotos-xtp1/t31.0-8/11147171_10204535607651723_2862706146932860053_o.jpg'

    },
    {
        title: 'Hevon',
        subtitle:'Front end dev. UI/UX Design',
        subtitle2:'(meteor/bootstrap)',
        url: 'http://www.hevon.co',
        description:'I was working for company Hevon. Creating full Front end website, UI/UX Design using meteor platform & bootstrap.',
        url1: 'https://scontent-ams2-1.xx.fbcdn.net/hphotos-xfp1/t31.0-8/10494976_10204535897258963_3065152790758724126_o.jpg',
        url2: 'https://scontent-ams2-1.xx.fbcdn.net/hphotos-xpt1/t31.0-8/11901451_10204535899699024_4174537365388182329_o.jpg'

    },
    {
        title: "Majka's Art",
        subtitle:'Portfolio website',
        subtitle2:'(PHP/Wordpress)',
        url: '',
        description:'I was working on my own portfolio of my paintings and drawings, using PHP-Wordpress.',
        url1: 'https://scontent-ams2-1.xx.fbcdn.net/hphotos-xpf1/t31.0-8/11952780_10204535599651523_8918647628904204788_o.jpg',
        url2: 'https://scontent-ams2-1.xx.fbcdn.net/hphotos-xlp1/t31.0-8/11942077_10204535600211537_7277515735144147022_o.jpg'

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