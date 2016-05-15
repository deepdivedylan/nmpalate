import {Component, OnInit} from "@angular/core";
import {OnActivate, RouteSegment, Router} from '@angular/router';
import {BeerService} from "../services/beer.service";
import {Beer} from "../classes/beer";

@Component({
	templateUrl: "app/templates/beer-detail.html",
	providers: [BeerService]
})

export class BeerDetailComponent implements OnInit {
	constructor(private beerService: BeerService, private router: Router) {}

	beer: Beer;
	beerList: Beer[];
	beerId: number;
	errorMessage: string;

	beerName: string;
	beerImageUrl: string;
	beerDescription: string;

	routerOnActivate(curr: RouteSegment) {
		this.beerId = Number(curr.getParam("id"));
	}

	ngOnInit() {
		this.getBeerById();
	}

	getBeerById() {
		this.beerService.getBeers()
			.subscribe(
				beers => {
					this.beer = beers.filter(result => result.id == +this.beerId)[0];
					this.beerName = this.beer.name;
					this.beerImageUrl = this.beer.imageUrl;
					this.beerDescription = this.beer.description;
				},
				error => this.errorMessage = error
			);
	}
}
