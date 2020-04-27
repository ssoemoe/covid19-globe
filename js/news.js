var articles = [];
var bannerIndex = 0;
function getNews() {
    let apiKey = "90bfe56954284352bc41a85e6bf10dfa";
    let url = 'https://newsapi.org/v2/everything?q=corona+virus&' + 'apiKey=' + apiKey;
    $.ajax({ url: url }).done(function (data) {
        articles = data.articles;
        let bannerInterval = setInterval(() => {
            if (bannerIndex == articles.length) {
                bannerIndex = 0;
            }
            $("#headline-news").empty();
            $("#headline-news").html(`
                <a href="${articles[bannerIndex].url}" target="_blank">${articles[bannerIndex].source.name}: ${articles[bannerIndex].title}</a>
            `);
            bannerIndex++;
        }, 3000);
    })
}