// JavaScript code for NFL

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://newscatcher.p.rapidapi.com/v1/search?media=True&sort_by=relevancy&lang=en&page=1&q=NFL",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "newscatcher.p.rapidapi.com",
		"x-rapidapi-key": "441f5fff35msh66538a1f641bd16p1624c8jsnf551a30cbe66"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
    console.log(response.articles[0].summary)
    $(".N0").text(response.articles[0].summary)
    $(".N1").text(response.articles[1].summary)
    $(".N2").text(response.articles[2].summary)
	$(".image1").prepend($('<img>',{src: response.articles[0].media}))
    $(".image2").prepend($('<img>',{src: response.articles[1].media}))
    $(".image3").prepend($('<img>',{src: response.articles[2].media}))
    
    
});


var settings2 = {
	"async": true,
	"crossDomain": true,
	"url": "https://sportspage-feeds.p.rapidapi.com/games?league=NFL",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "sportspage-feeds.p.rapidapi.com",
		"x-rapidapi-key": "835907ab9emshe7e0ee47d7df2acp1b926djsn8ec7b1d4b220"
	}
}

$.ajax(settings2).done(function (response) {
	console.log(response);
	
	var newRow = $("<div>")
	
    for(var i = 0; i < 25; i++){
		var scheduele = $("<div>").text(response.results[i].summary )
		var status = $("<div>").text("Status:" + response.results[i].status) 
		var scoreAway = $("<td>").text("Away score:" + response.results[i].scoreboard.score.away + "--") 
		var scoreHome = $("<td>").text("Home score:" + response.results[i].scoreboard.score.home )
		var seperation =  $("<div>").text("--------------------------------------------------" )
		newRow.append(scheduele)
		newRow.append(status)
		newRow.append(scoreAway)
		newRow.append(scoreHome)
		newRow.append(seperation)
	$(".B1").append(newRow)

   
	}

});
