import {Component, OnInit} from "@angular/core";
import {Routes, Router, ROUTER_DIRECTIVES} from "@angular/router";
import {AboutComponent} from "./components/about";
import {SplashComponent} from "./components/splash";
import {ResultComponent} from "./components/result";
import {QuestionComponent} from "./components/question";
import {QuestionService} from "./services/question.service"

@Component({
	selector: "nm-pallete",
	template: "<router-outlet></router-outlet>",
	directives: [ROUTER_DIRECTIVES],
	providers: [QuestionService]
})

@Routes([
	{path: "/result", component: ResultComponent},
	{path: "/about", component: AboutComponent},
	{path: "/question", component: QuestionComponent},
	{path: "/", component: SplashComponent},
	{path: "*", component: SplashComponent}
])

export class NmPallete {
	constructor(private router: Router) {}
}
