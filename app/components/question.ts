import {Component} from "@angular/core";
import {QuestionService} from "../services/question.service"


@Component({
    templateUrl: "app/templates/question.html",
})

export class QuestionComponent {
    constructor(private QuestionService: QuestionService) {}
}