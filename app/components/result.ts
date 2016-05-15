import {Component, OnInit} from "@angular/core";
import {CookieService} from 'angular2-cookie/core';

@Component({
    templateUrl: "app/templates/result.html",
    providers: [CookieService]
    
})

export class ResultComponent {
    constructor (
        private cookieService: CookieService) {}

    score: number[];

    ngOnInit() {
        this.score = this.getScore();
    }

    getScore() {
        let score = this.cookieService.get("score");
        let parsedScore = score.split(",");
        let numberScore = [];
        parsedScore.forEach(function(entry) {
            numberScore.push(Number(entry));
        });
        return numberScore;
    }
}


