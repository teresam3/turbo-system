var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://newscatcher.p.rapidapi.com/v1/search?media=True&sort_by=relevancy&lang=en&page=1&q=NBA",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "newscatcher.p.rapidapi.com",
		"x-rapidapi-key": "441f5fff35msh66538a1f641bd16p1624c8jsnf551a30cbe66"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
    console.log(response.articles[0].summary)
    $(".A0").text(response.articles[0].summary)
    $(".A1").text(response.articles[1].summary)
    $(".A2").text(response.articles[2].summary)
	$(".A3").text(response.articles[3].summary)
	$(".NBA1").text(response.articles[1].clean_url)
    $(".NBA2").text(response.articles[2].clean_url)
	$(".NBA3").text(response.articles[3].clean_url)
});




