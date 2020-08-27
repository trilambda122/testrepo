// http://api.amp.active.com/v2/search?query=running&category=event&start_date=2020-07-04..&near=San%20Diego,CA,US&radius=50&api_key=fza3kapxc7dgqnj28uad8v4x


$(document).ready(function() {


    var ACTIVE_API_KEY = 'fza3kapxc7dgqnj28uad8v4x';
    var activeDate = "2020-08-26";
    var activeURL = `http://api.amp.active.com/v2/search?query=category=event&start_date=${activeDate}..&near=Austin,TX,US&radius=100&api_key=${ACTIVE_API_KEY}`;


    var CAMPSITE_KEY = 'p4yw44kxbzz25cehg6e8n7da';
    console.log(activeURL);


    $.ajax({
        url: activeURL,
        method: "GET"
    }).then(function(activeObj) {

        console.log(activeObj);


    });








});