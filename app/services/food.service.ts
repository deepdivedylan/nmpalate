import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Food} from "../classes/food";
import {TasteCoordinates} from "../classes/taste-coordinates";

@Injectable()
export class FoodService {
	constructor(private http: Http) {}

	private foodUrl = "/app/api/food.json";

	getFood(): Observable<Food[]> {
		return(this.http.get(this.foodUrl)
			.map(this.extractData)
			.catch(this.handleError));
	}

	private extractData(response: Response) {
		if(response.status < 200 || response.status >= 300) {
			throw(new Error("Bad response status: " + response.status))
		}

		return(response.json());
	}

	private handleError(error: any) {
		let message = error.message;
		console.log(message);
		return(Observable.throw(message));
	}
}
