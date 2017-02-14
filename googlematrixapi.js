var request = require("request");
var origin, destination;

var readlineSync = require('readline-sync');

console.log("Welcome to the Google Distance Calculator", "\n") // Welcome message

// Wait for user's response. 
var origin = readlineSync.question('Input your origin: ');
var destination = readlineSync.question('Input your destination: ');



console.log("origin: ", origin); // User's Orign Input
console.log("destination: ", destination); // User's destination Input
printDistanceDuration(origin, destination); // Print's out Users's Origin and Distance Input


/* API query returns distance information to user's, for walking mode*/
function printDistanceDuration(origin, destination){
	request({
		url: "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" + origin + ", Nigeria&destinations=" + destination + ", Nigeria&mode=walking&key=AIzaSyCwcC1rTSl1j31iQrmloe26uPfOe-nHDKA",
		method: "GET"
	}, function(error, response, body){
		if (error){
			console.log("An error occurred");
			return;
		}
		
		body = JSON.parse(body);
		//console.log(body.rows[0].elements[0])
		
		var distanceInfo = body.rows[0].elements[0];
		console.log("Duration: ", distanceInfo.duration.text)
		console.log("Distance: ", distanceInfo.distance.text)
	});

}