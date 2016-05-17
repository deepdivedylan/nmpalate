import {Component, OnInit} from "@angular/core";
import {FoodService}  from "../services/food.service";
import {Food} from "../classes/food";

@Component ({
	templateUrl: "app/templates/food.html",
	providers: [FoodService]}
)

export class FoodComponent{

	constructor(private foodService: FoodService) {}
	
	foodList:Food[];
	errorMessage:string;

	ngOnInit() {
		this.getFoods();
	}

	getFoods() {
		this.foodService.getFood()
			.subscribe(
				Foods => {
					this.foodList = Foods;
				},
				error => this.errorMessage = error
			);
	}














}




























