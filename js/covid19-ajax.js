var countries = [];
var selectedCountry = { name: "Myanmar", alpha2code: "MM" };

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

var getCountries = function () {

    $.ajax(settings).done(function (response) {
        for (let country of response) {
            countries.push({ value: country.name, data: country.alpha2code });
        }
        $('#countryName').autocomplete({
            lookup: countries
        });
    });
}

var getLatestData = function (countryCode) {
    let countryInList = countries.filter(c => c.data === countryCode);
    if (!countryInList) {
        return;
    }
    settings.url = `https://covid-19-data.p.rapidapi.com/country/code?format=json&code=${countryCode}`;
    $.ajax(settings).done(function (response) {
        if (response.length == 0) return;
        let responseCountry = response[0];
        $("#summary-live-stats").empty();
        $("#summary-live-stats").html(`
            <h3>${responseCountry["country"]}</h3>
            <p><b>Confirmed: </b> <span style="color: red">${responseCountry["confirmed"]}</span></p>
            <p><b>Recovered: </b> <span style="color: red">${responseCountry["recovered"]}</span></p>
            <p><b>Critical: </b> <span style="color: red">${responseCountry["critical"]}</span></p>
            <p><b>Deaths: </b> <span style="color: red">${responseCountry["deaths"]}</span></p>
        `);
    });
}