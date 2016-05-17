import {Component, OnInit} from "@angular/core";
import {BeerService} from "../services/beer.service";
import {Beer} from "../classes/beer";

@Component({
	templateUrl: "app/templates/beer.html",
	providers: [BeerService]

})

export class BeerComponent	{
	constructor(private beerService: BeerService) {}

	beerList:Beer[];
	errorMessage:string;

	ngOnInit() {
		this.getBeers();
	}

	getBeers() {
		this.beerService.getBeers()
		.subscribe(
			Beers => {
				this.beerList = Beers;
			},
			error => this.errorMessage = error
		);
	}


}
