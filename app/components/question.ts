import {Component, OnInit} from "@angular/core";
import {OnActivate, RouteSegment, Router} from '@angular/router';
import {QuestionService} from "../services/question.service";
import {AnswersService} from "../services/answers.service";
import {Question} from "../classes/question";
import {Answers} from "../classes/answers";
import {CookieService} from 'angular2-cookie/core';



@Component({
    templateUrl: "app/templates/question.html",
    providers: [QuestionService, AnswersService, CookieService]
})

export class QuestionComponent {
    constructor (
        private questionService: QuestionService,
        private answersService: AnswersService,
        private router: Router,
        private cookieService: CookieService) {}

    questionList: Question[];
    answerList: Answers[];
    errorMessage: string;
    currentQuestionId: string;
    currentQuestion: Question;
    questionText: string;

    routerOnActivate(curr: RouteSegment) {
        this.currentQuestionId = curr.getParam('id');
    }

    ngOnInit() {
        this.getQuestions();
        this.getAnswers();
        this.cookieService.put("key","value");
    }

    getQuestions() {
        this.questionService.getQuestions()
            .subscribe(
                questions => {
                    this.questionList = questions;
                    this.currentQuestion = questions[this.currentQuestionId];
                    this.questionText = this.currentQuestion.text;
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
        if(Number(this.currentQuestionId) <= 8) {
            this.router.navigate(['/question', Number(this.currentQuestionId) + 1]);
        } else {
            this.router.navigate(['/result']);
        }
    }
}