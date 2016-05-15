import {Component, OnInit} from "@angular/core";
import {ChileService} from "../services/chile.service";
import {Chile} from "../classes/chile";

@Component({
	templateUrl: "app/templates/chile.html",
	providers: [ChileService]}
)

export class ChileComponent {

	constructor (private chileService: ChileService) {
	}

	chileList:Chile[];
	errorMessage:string;

	ngOnInit() {
		this.getChiles();
	}

	getChiles() {
		this.chileService.getChile()
			.subscribe(
				Chiles => {
					this.chileList = Chiles;
				},
				error => this.errorMessage = error
			);
	}
}