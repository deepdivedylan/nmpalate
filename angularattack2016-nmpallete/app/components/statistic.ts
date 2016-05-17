import {Component, OnInit} from "@angular/core";
import {StatisticService} from "../services/statistic";
import {Statistic} from "../classes/statistic";

@Component({

	templateUrl:"app/templates/statistic.html",
	providers: [StatisticService]}
)

export class StatisticComponent{
	constructor(private statisticService: StatisticService) {
	}
	statisticList:Statistic[];
	errorMessage:string;

	ngOnInit() {
		this.getStatistics();
	}

	getStatistics() {
		this.statisticService.getStatistic()
			.subscribe(
				Statistics => {
					this.statisticList = Statistics;
				},
				error => this.errorMessage = error
			);
	}
}