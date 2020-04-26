var countries = [];

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://covid-19-data.p.rapidapi.com/help/countries?format=json",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "fd63c3399fmshd494536bca7b420p1ac258jsn1ad4b6d3ddff"
    }
}

$.ajax(settings).done(function (response) {
    countries = response;
});