$(function () {
    getCountries();
    getLatestData("MM");
    // call the init() API to show the IO globe in the browser
    controller.init();

    $("#search-btn").on('click', function () {
        let country = countries.filter(c => c.value === $("#countryName").val().trim());
        if (!country) return;
        selectedCountry.name = country[0].value;
        selectedCountry.alpha2code = country[0].data;
        controller.switchCountry(selectedCountry.alpha2code);
        getLatestData(selectedCountry.alpha2code);
    });
});