<<<<<<< HEAD


var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://sportspage-feeds.p.rapidapi.com/games?league=MLB",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "sportspage-feeds.p.rapidapi.com",
		"x-rapidapi-key": "835907ab9emshe7e0ee47d7df2acp1b926djsn8ec7b1d4b220"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
	
	var newRow = $("<div>")
	
    for(var i = 0; i<25; i++){
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
	$(".A1").append(newRow)

   
	}

});









$.ajax(settings).done(function (response) {
	console.log(response);
    console.log(response.articles[0].summary)
    
    var settings = {
=======
	var settings = {
>>>>>>> 28f903b7a949a82c93e7583f3297663fa1dc9ed2
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
	// $(".MLB1").text(response.articles[1].link)
    // $(".MLB2").text(response.articles[2].link)
	// $(".MLB3").text(response.articles[3].link)
	$(".image1").prepend($('<img>',{src: response.articles[0].media}))
    $(".image2").prepend($('<img>',{src: response.articles[1].media}))
	$(".image3").prepend($('<img>',{src: response.articles[2].media}))
    

});
    

