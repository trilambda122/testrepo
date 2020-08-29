// http://api.amp.active.com/v2/search?query=running&category=event&start_date=2020-07-04..&near=San%20Diego,CA,US&radius=50&api_key=fza3kapxc7dgqnj28uad8v4x


$(document).ready(function() {


    var ACTIVE_API_KEY = 'fza3kapxc7dgqnj28uad8v4x';
    var OpenCageApiKey = "c22a140216d344e681313be4097d21ff";
    var ticketMasterKey = "0Mi6dfmCVhGABxKndmYNDyNIJMSISw6B";
    var activeDate = "2020-08-26";
    var city = "austin";
    var austinLatLong = "30.2711286,-97.7436995";
    var ticketRadius = "5";
    var ticketunit = "miles";
    var ticketDate = "2020-08-28T00:00:00Z"
    var activeURL = `https://cors-anywhere.herokuapp.com/https://api.amp.active.com/v2/search?query=category=event&start_date=${activeDate}..&near=Austin,TX,US&radius=25&api_key=${ACTIVE_API_KEY}`;
    var OpenCageURL = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${OpenCageApiKey}`;
    var yelpToken = `9Ne2ihRPJ8cQ2d861NnTtiS8Zi6HfYG8OWhoJJVU5FjHVlcmLqcWu15TtVz3Cr2uZYI0VeSH6KOkr_6IkvOMC8kqwB8O3sKn4v3Ph9nG-iM6BrNaIXOoGUmYcbBFX3Yx`;
    var ticketMasterURL = `https://app.ticketmaster.com/discovery/v2/events.json?latlong=${austinLatLong}&radius=${ticketRadius}&unit=${ticketunit}&startDateTime=${ticketDate}&size=5&apikey=${ticketMasterKey}`;
    var yelpURL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=tours&location=78704`

    var CAMPSITE_KEY = 'p4yw44kxbzz25cehg6e8n7da';


    // acitve.com API call
    $.ajax({
        url: activeURL,
        method: "GET"
    }).then(function(activeObj) {
        console.log("<----------ACTIVE.COM---------->");
        console.log(activeObj);


    });


    $.ajax({
        url: OpenCageURL,
        method: "GET"
    }).then(function(activeObj) {
        console.log("<----------OPEN CAGE---------->");
        console.log(activeObj);


    });


    $.ajax({
        url: ticketMasterURL,
        method: "GET"
    }).then(function(activeObj) {
        console.log("<----------Ticket MASTER---------->");
        console.log(activeObj);

    });




    $.ajax({
        url: yelpURL,
        method: "GET",
        headers: { "Authorization": 'Bearer ' + yelpToken }
    }).then(function(activeObj) {
        console.log("<----------Yelp--------->");
        console.log(activeObj);

    });

});