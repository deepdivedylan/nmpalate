import {Component, OnInit} from "@angular/core";
import {QuestionService} from "../services/question.service";
import {Question} from "../classes/question";


@Component({
    templateUrl: "app/templates/question.html",
    providers: [QuestionService]
})

export class QuestionComponent {
    constructor(private questionService: QuestionService) {}

    questionList: Question[];
    errorMessage: string;

    ngOnInit() {
        this.getQuestions();
    }

    getQuestions() {
        this.questionService.getQuestions()
            .subscribe(
                questions => {
                    this.questionList = questions;
                },
                error => this.errorMessage = error

            );
    }
}