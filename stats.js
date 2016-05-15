#!/usr/bin/env node
var fs = require("fs");
var statistics = require("statistics");

function distributeStatistics(axes) {
	var result = {savory: {mean: 0.0, stdev: 0.0}, spice: {mean: 0.0, stdev: 0.0}, sweet: {mean: 0.0, stdev: 0.0}};
	var statisticians = {savory: statistics(), spice: statistics(), sweet: statistics()};

	for(var statistician in statisticians) {
		for(var index in axes[statistician]) {
			statisticians[statistician].value(axes[statistician][index]);
		}
		result[statistician].mean = statisticians[statistician].mean;
		result[statistician].stdev = statisticians[statistician].stdev;
	}

	return(result);
}

function readAxes(filename) {
	var axes = {};
	var labels = ["savory", "spice", "sweet"];
	for(var index in labels) {
		axes[labels[index]] = [];
	}

	var json = fs.readFileSync(filename, "UTF-8");
	var blob = JSON.parse(json);
	for(var index in blob) {
		var coordinates = blob[index].coordinates;
		if(typeof coordinates === "object") {
			for(var axis in coordinates) {
				axes[axis].push(coordinates[axis]);
			}
		}
	}
	return(axes);
}

var beerAxes = readAxes("app/api/beer.json");
var chileAxes = readAxes("app/api/chile.json");
var foodAxes = readAxes("app/api/food.json");

var beerResult = distributeStatistics(beerAxes);
var chileResult = distributeStatistics(chileAxes);
var foodResult = distributeStatistics(foodAxes);
var netResult = {beer: beerResult, chile: chileResult, food: foodResult};

fs.writeFileSync("app/api/statistic.json", JSON.stringify(netResult), {encoding: "UTF-8", mode: 0o644});
