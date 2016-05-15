import {Component, OnInit} from "@angular/core";
import {AnswersService} from "../services/answers.service";
import {Answers} from "../classes/answers";


@Component({
    selector: "answers",
    templateUrl: "app/templates/answers.html",
    providers: [AnswersService]
})

export class AnswersComponent {
    constructor(private answersService: AnswersService) {}

    answerList: Answers[];
    errorMessage: string;

    ngOnInit() {
        this.getAnswers();
    }

    getAnswers() {
        this.answersService.getAnswers()
            .subscribe(
                answers => {
                    this.answerList = answers;
                },
                error => this.errorMessage = error

            );
    }
    onSelect(hero: Hero) {
        this.router.navigate(['/question', question.id]);//need this on question???
    }
}