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
	console.log(response.articles[0].media)
    $(".A0").text(response.articles[0].summary)
    $(".A1").text(response.articles[1].summary)
    $(".A2").text(response.articles[2].summary)
	$(".NBA1").text(response.articles[1].link)
    $(".NBA2").text(response.articles[2].link)
	$(".NBA3").text(response.articles[3].link)
	$(".image1").prepend($('<img>',{src: response.articles[0].media}))
    $(".image2").prepend($('<img>',{src: response.articles[1].media}))
	$(".image3").prepend($('<img>',{src: response.articles[2].media}))
});




