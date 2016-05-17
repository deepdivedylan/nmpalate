import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Beer} from "../classes/beer";
import {TasteCoordinates} from "../classes/taste-coordinates";


@Injectable()
export class BeerService {
	constructor(private http: Http) {}

	private beerUrl = "/app/api/beer.json";

	getBeers(): Observable<Beer[]>{
		return(this.http.get(this.beerUrl)
			.map(this.extractData)
			.catch(this.handleError));
	}

	getBeer(id: number | string): Beer {
		var beers = this.getBeers();
		var beer = beers.mergeAll().filter(result => result.id == +id)[0];
		return(beer);
	}

	private extractData(response: Response){
		if(response.status < 200 || response.status >= 300) {
			throw(new Error("Bad response status: " + response.status))
		}
		return(response.json());
	}

	private handleError(error:any) {
		let message = error.message;
		console.log(message);
		return(Observable.throw(message));
	}
}
