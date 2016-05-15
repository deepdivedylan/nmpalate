import {Component, OnInit} from "@angular/core";
import {OnActivate, RouteSegment, Router} from '@angular/router';
import {QuestionService} from "../services/question.service";
import {AnswersService} from "../services/answers.service";
import {Question} from "../classes/question";
import {Answers} from "../classes/answers";


@Component({
    templateUrl: "app/templates/question.html",
    providers: [QuestionService, AnswersService]
})

export class QuestionComponent {
    constructor (
        private questionService: QuestionService,
        private answersService: AnswersService,
        private router: Router) {}

    questionList: Question[];
    answerList: Answers[];
    errorMessage: string;
    currentQuestionId: string;

    routerOnActivate(curr: RouteSegment) {
        this.currentQuestionId = curr.getParam('id');
        console.log(this.currentQuestionId);
    }

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
                    let fullAnswerList = answers;
                    this.answerList = this.getAnswersByQuestionId(this.currentQuestionId, fullAnswerList);
                },
                error => this.errorMessage = error
            );
    }

    getAnswersByQuestionId(id, answers) {
        let answersByQuestion = [];
        answers.forEach(function(entry) {
           if (entry.questionId == id) {
               answersByQuestion.push(entry)
           }
        });
        return answersByQuestion;
    }

    onSelect() {
        this.router.navigate(['/question', this.currentQuestionId + 1])
            //to account for: last question, make sure you get ID
    }
}