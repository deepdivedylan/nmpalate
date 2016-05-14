import {Injectable} from '@angular/core';

@Injectable()

export class QuestionService {
    getQuestions() {
        return {question: {text: "test"}};
    }
}