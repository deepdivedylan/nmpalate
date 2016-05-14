import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Chile} from "../classes/chile";
import {TasteCoordinates} from "../classes/taste-coordinates";


@Injectable()
export class	ChileService{
	constructor(private http: Http){}

	private chileUrl=  "/app/api/chile.json";

	getChile(): Observable<Chile[]>{
		return(this.http.get(this.chileUrl)
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
































