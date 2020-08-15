// JavaScript code for NFL
/*var settings = {
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
    var newRow = $("<tr>")
    var scheduele = $("<td>").text(response.events.event_date)
    newRow.append(scheduele)
    $("loser").append(newRow)
});



var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-football-v1.p.rapidapi.com/v2/predictions/157462",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "835907ab9emshe7e0ee47d7df2acp1b926djsn8ec7b1d4b220"
	}
}

$.ajax(settings).done(function (response) {
    console.log(response);
    console.log(response.api.predictions[0])
    var newRow = $("<tr>")
    var scheduele = $("<td>").text(response.api.predictions[0].advice)
    newRow.append(scheduele)
    $("lmao").append(newRow)
});*/


var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://sportspage-feeds.p.rapidapi.com/games",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "sportspage-feeds.p.rapidapi.com",
		"x-rapidapi-key": "835907ab9emshe7e0ee47d7df2acp1b926djsn8ec7b1d4b220"
	}
}

$.ajax(settings).done(function (response) {
    console.log(response.results);
    var newRow = $("<tr>")
    for(var i =0; i<10;i++){
        var scheduele = $("<td>").text(response.results[i].summary ) 
        newRow.append(scheduele)

    $("lmao").append(newRow)
    $("lmao").addClass("abcdef")
    console.log($("lmao").attr("class"))
    }
    //var scheduele = $("<td>").text(response.results[0].summary )
   /* newRow.append(scheduele)
    $("lmao").append(newRow)*/
});