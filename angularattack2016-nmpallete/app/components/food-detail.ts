import {Component, OnInit} from "@angular/core";
import {OnActivate, RouteSegment, Router} from '@angular/router';
import {FoodService} from "../services/food.service";
import {Food} from "../classes/food";

@Component({
    templateUrl: "app/templates/food-detail.html",
    providers: [FoodService]
})

export class FoodDetailComponent implements OnInit {
    constructor(private FoodService: FoodService, private router: Router) {}

    food: Food;
    foodId: number;
    errorMessage: string;

    foodName: string;
    foodImageUrl: string;
    foodDescription: string;

    routerOnActivate(curr: RouteSegment) {
        this.foodId = Number(curr.getParam("id"));
    }

    ngOnInit() {
        this.getFoodById();
    }

    getFoodById() {
        this.FoodService.getFood()
            .subscribe(
                food => {
                    this.food = food.filter(result => result.id == +this.foodId)[0];
                    this.foodName = this.food.name;
                    this.foodImageUrl = this.food.imageUrl;
                    this.foodDescription = this.food.description;
                },
                error => this.errorMessage = error
            );
    }
}
