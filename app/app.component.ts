import {Component} from "@angular/core";
import {NgClass} from "@angular/common";
import {Routes, Router, ROUTER_DIRECTIVES} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";
import {AboutComponent} from "./components/about";
import {BeerComponent} from "./components/beer";
import {BeerDetailComponent} from "./components/beer-detail";
import {ChileComponent} from "./components/chile";
import {ChileDetailComponent} from "./components/chile-detail";
import {FoodComponent} from "./components/food";
import {FoodDetailComponent} from "./components/food-detail";
import {SplashComponent} from "./components/splash";
import {ResultComponent} from "./components/result";
import {QuestionComponent} from "./components/question";
import "rxjs/Rx";

@Component({
	selector: "nm-pallete",
	templateUrl: "app/templates/nm-pallete.html",
	directives: [NgClass, ROUTER_DIRECTIVES],
	providers: [HTTP_PROVIDERS]
})

@Routes([
	{path: "/beers", component: BeerComponent},
	{path: "/beer/:id", component: BeerDetailComponent},
	{path: "/chiles", component: ChileComponent},
	{path: "/chile/:id", component: ChileDetailComponent},
	{path: "/foods", component: FoodComponent},
	{path: "/food/:id", component: FoodDetailComponent},
	{path: "/result", component: ResultComponent},
	{path: "/about", component: AboutComponent},
	{path: "/question/:id", component: QuestionComponent},
	{path: "/", component: SplashComponent},
	{path: "*", component: SplashComponent}
])

export class NmPallete {
	constructor(private router: Router) {}

	navCollapse = true;

	toggleCollapse() {
		this.navCollapse = !this.navCollapse;
	}


}
