import {Component} from "@angular/core";
import {Routes, Router, ROUTER_DIRECTIVES} from "@angular/router";
import {QuestionComponent} from "../components/question";

@Component({
	templateUrl: "app/templates/splash.html",
	directives: [ROUTER_DIRECTIVES]
})

@Routes([
	{path: "/question/:id", component: QuestionComponent},
])

export class SplashComponent {}
