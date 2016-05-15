import {Component} from "@angular/core";
import {NgClass} from "@angular/common";
import {Routes, Router, ROUTER_DIRECTIVES} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";
import {AboutComponent} from "./components/about";
import {BeerComponent} from "./components/beer";
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
	{path: "/beer", component: BeerComponent},
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
