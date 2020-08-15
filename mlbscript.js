/*var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://therundown-therundown-v1.p.rapidapi.com/sports/2/events/2020-02-02?include=all_periods&include=scores&offset=0",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "therundown-therundown-v1.p.rapidapi.com",
	"url": "https://newscatcher.p.rapidapi.com/v1/search?media=True&sort_by=relevancy&lang=en&page=1&q=MLB",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "newscatcher.p.rapidapi.com",
		"x-rapidapi-key": "441f5fff35msh66538a1f641bd16p1624c8jsnf551a30cbe66"
	}
}*/

$.ajax(settings).done(function (response) {
	console.log(response);
    console.log(response.articles[0].summary)
    
    var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://newscatcher.p.rapidapi.com/v1/search?media=True&sort_by=relevancy&lang=en&page=1&q=MLB",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "newscatcher.p.rapidapi.com",
		"x-rapidapi-key": "441f5fff35msh66538a1f641bd16p1624c8jsnf551a30cbe66"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
    console.log(response.articles[0].summary)
    $(".M0").text(response.articles[0].summary)
    $(".M1").text(response.articles[1].summary)
    $(".M2").text(response.articles[2].summary)
    $(".A3").text(response.articles[3].summary)
    

});
    

});