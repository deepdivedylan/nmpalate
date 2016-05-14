import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable}  from "rxjs/Observable";
import {Question} from '../classes/question';
import {Answers} from '../classes/answers';

@Injectable()
export class QuestionService {
	constructor(private http: Http) {}
	private questionUrl = "/app/api/question.json";

	getQuestions() : Observable<Question[]> {
		return(this.http.get(this.questionUrl)
			.map(this.extractData)
			.catch(this.handleError));
	}

	private extractData(response: Response) {
		if(response.status <  200 || response.status >= 300) {
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
