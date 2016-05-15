#!/usr/bin/env node
var fs = require("fs");
var statistics = require("statistics");

var theData = [0.1, 0.4, 1.8, 1.2, 8.6, 0.75];
var jsaul = statistics();

theData.forEach(function(item) {
	jsaul.value(item);
});

function readAxes(filename) {
	var axes = {};
	var labels = ["savory", "spice", "sweet"];
	for(var index in labels) {
		axes[labels[index]] = [];
	}

	var json = fs.readFileSync(filename, "UTF-8");
	var blob = JSON.parse(json);
	for(var index in blob) {
		var coordiniates = blob[index].coordiniates;
		if(typeof coordiniates === "object") {
			for(var axis in coordiniates) {
				axes[axis].push(coordiniates[axis]);
			}
		}
	}
	return(axes);
}

var beerAxes = readAxes("app/api/beer.json");
var chileAxes = readAxes("app/api/chile.json");
var foodAxes = readAxes("app/api/food.json");
