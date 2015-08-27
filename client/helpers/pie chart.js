
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