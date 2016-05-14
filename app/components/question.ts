import {Component, OnInit} from "@angular/core";
import {QuestionService} from "../services/question.service";
import {AnswersService} from "../services/answers.service";
import {Question} from "../classes/question";
import {Answers} from "../classes/answers";


@Component({
    templateUrl: "app/templates/question.html",
})

export class QuestionComponent {
    constructor(private QuestionService: QuestionService, private AnswersService: AnswersService) {}
    questionList: Question[];
    answerList: Answers[];
    
    ngOnInit() {
    }
    
}