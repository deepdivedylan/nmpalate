import {Component, OnInit} from "@angular/core";
import {Routes, Router, ROUTER_DIRECTIVES} from "@angular/router";
import {AboutComponent} from "./components/about";
import {SplashComponent} from "./components/splash";
import {ResultComponent} from "./components/result";

@Component({
	selector: "nm-pallete",
	template: "<router-outlet></router-outlet>",
	directives: [ROUTER_DIRECTIVES]
})

@Routes([
    {path: "/result", component: ResultComponent},
	{path: "/about", component: AboutComponent},
	{path: "/", component: SplashComponent}
])

export class NmPallete {
	constructor(private router: Router) {}
}
