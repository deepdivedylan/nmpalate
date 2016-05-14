import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable}  from "rxjs/Observable";
import {Answers} from '../classes/answers';

@Injectable()
export class AnswersService {
    constructor(private http:Http) {}
    private answersUrl = "/app/api/answer.json";

    getAnswer():Observable<Answers[]> {
        return (this.http.get(this.answersUrl)
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