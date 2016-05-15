import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Statistic} from "../classes/statistic";
import {TasteCoordinates} from "../classes/taste-coordinates";


@Injectable()
export class	StatisticService{
	constructor(private http: Http){}

	private statisticUrl=  "/app/api/statistic.json";

	getStatistic(): Observable<Statistic[]>{
		return(this.http.get(this.statisticUrl)
			.map(this.extractData)
			.catch(this.handleError));
	}

	private extractData(response: Response){
		if(response.status < 200 || response.status >= 300) {
			throw(new Error("Bad response status: " + response.status))
		}
		return(response.json());
	}

	private handleError(error:any){

		let message = error.message;
		console.log(message);
		return(Observable.throw(message));
	}
}
