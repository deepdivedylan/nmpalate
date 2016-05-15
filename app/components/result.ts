import {Component, OnInit} from "@angular/core";
import {CookieService} from 'angular2-cookie/core';

import {Beer} from "../classes/beer";
import {Chile} from "../classes/chile";
import {Food} from "../classes/food";
import {TasteCoordinates} from "../classes/taste-coordinates";
import {BeerService} from "../services/beer.service";
import {ChileService} from "../services/chile.service";
import {FoodService} from "../services/food.service";

@Component({
	templateUrl: "app/templates/result.html",
	providers: [BeerService, CookieService, ChileService, FoodService]

})

export class ResultComponent {
	constructor (private beerService: BeerService, private cookieService: CookieService, private chileService: ChileService, private foodService: FoodService) {}

		beerList: Beer[];
		chileList: Chile[];
		foodList: Food[];
		errorMessage: string;
		selectedBeer: Beer;
		selectedChile: Chile;
		selectedFood: Food;

		ngOnInit() {
			this.getBeers();
			this.getChile();
			this.getFood();
		}

		getBeers() {
			this.beerService.getBeers()
			.subscribe(
				beers => {
					this.beerList = beers;
				},
				error => this.errorMessage = error
			);
		}

		getChile() {
			this.chileService.getChile()
			.subscribe(
				chiles => {
					this.chileList = chiles;
				},
				error => this.errorMessage = error
			);
		}

		getFood() {
			this.foodService.getFood()
			.subscribe(
				pantry => {
					this.foodList = pantry;
					this.getScore();
				},
				error => this.errorMessage = error
			);
		}

		getScore() {
			let score = this.cookieService.get("score");
			let parsedScore = score.split(",");
			let userScore = new TasteCoordinates(Number(parsedScore[0]), Number(parsedScore[1]), Number(parsedScore[2]));

			let currentBeer = undefined;
			let beerDistance = Number.POSITIVE_INFINITY;
			let newBeerDistance = Number.POSITIVE_INFINITY;
			this.beerList.forEach(function(beer) {
				newBeerDistance = userScore.euclideanDistance(beer.coordinates);
				if(newBeerDistance < beerDistance) {
					currentBeer = beer;
					beerDistance = newBeerDistance;
				}
			});
			this.selectedBeer = currentBeer;

			let currentChile = undefined;
			let chileDistance = Number.POSITIVE_INFINITY;
			let newChileDistance = Number.POSITIVE_INFINITY;
			this.chileList.forEach(function(chile) {
				newChileDistance = userScore.euclideanDistance(chile.coordinates);
				if(newChileDistance < chileDistance) {
					currentChile = chile;
					chileDistance = newChileDistance;
				}
			});
			this.selectedChile = currentChile;

			console.log(this.foodList);
			let currentFood = undefined;
			let foodDistance = Number.POSITIVE_INFINITY;
			let newFoodDistance = Number.POSITIVE_INFINITY;
			this.foodList.forEach(function(food) {
				newFoodDistance = userScore.euclideanDistance(food.coordinates);
				if(newFoodDistance < foodDistance) {
					currentFood = food;
					foodDistance = newFoodDistance;
				}
			});
			this.selectedFood = currentFood;
		}
	}
