import {Component, OnInit} from "@angular/core";
import {BeerService} from "../services/beer.service";
import {Beer} from "../classes/beer";

@Component({
	templateUrl: "app/templates/splash.html",
	providers: [BeerService]

})

export class BeerComponent	{
	constructor(private beerService: BeerService) {
	}

	beerList:Beer[];
	errorMessage:string;

	ngOnInit() {
		this.getBeers();
	}

	getBeers() {
		this.beerService.getBeer()
			.subscribe(
				Beers => {
					this.beerList = Beers;
				},
				error => this.errorMessage = error
			);
	}
}