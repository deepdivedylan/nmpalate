import {Component, OnInit} from "@angular/core";
import {QuestionService} from "../services/question.service";
import {AnswersService} from "../services/answers.service";
import {Question} from "../classes/question";
import {Answers} from "../classes/answers";


@Component({
    templateUrl: "app/templates/question.html",
    providers: [QuestionService, AnswersService]
})

export class QuestionComponent {
    constructor(private questionService: QuestionService, private answersService: AnswersService) {}

    questionList: Question[];
    answerList: Answers[];
    errorMessage: string;

    ngOnInit() {
        this.getQuestions();
        this.getAnswers();
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

    getAnswers() {
        this.answersService.getAnswers()
            .subscribe(
                answers => {
                    this.answerList = answers;
                    console.log(this.answerList);
                },
                error => this.errorMessage = error
            );

    }
}