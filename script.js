
//This code pulls live scores from the user selected sport and date.

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://therundown-therundown-v1.p.rapidapi.com/sports/2/events/2020-02-02?include=all_periods&include=scores&offset=0",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "therundown-therundown-v1.p.rapidapi.com",
		"x-rapidapi-key": "441f5fff35msh66538a1f641bd16p1624c8jsnf551a30cbe66"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});


// This code pulls the relevant news based on a user's provided league.


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
});

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://thesportsdb.p.rapidapi.com/1/eventstv.php?s=Sports&d=2018-07-07",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "thesportsdb.p.rapidapi.com",
		"x-rapidapi-key": "979cf787b4msh8d62d7690b6a369p11f350jsn04f3498cc27b"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
	$(".PIC").text(response.players[0])
});