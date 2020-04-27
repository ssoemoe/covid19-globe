// get the container to hold the IO globe
var container = document.getElementById("globalArea");

var configs = {
    control: {
        stats: false,
        disableUnmentioned: false,
        lightenMentioned: false,
        inOnly: false,
        outOnly: false,
        initCountry: "MM",
        halo: true
    },
    color: {
        surface: 0xffffff,
        selected: 0xb02f2b,
        in: 0x154492,
        out: 0xDD380C,
        halo: 0xFFFFFF,
        background: null
    },
    brightness: {
        ocean: 0.5,
        mentioned: 0.5,
        related: 0.5
    }
}
function onSelectGlobe(pickedCountry) {
    let country = countries.filter(c => c.data === pickedCountry.ISOCode);
    if (!country) return;
    selectedCountry.name = country[0].value;
    selectedCountry.alpha2code = country[0].data;
    controller.switchCountry(selectedCountry.alpha2code);
    $("#countryName").val(country[0].value);
    getLatestData(selectedCountry.alpha2code);
}

// create controller for the IO globe, input the container as the parameter
var controller = new GIO.Controller(container);
controller.configure(configs);
controller.onCountryPicked(onSelectGlobe);
