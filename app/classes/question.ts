import {Answers} from "./answers";

export class Question {
    constructor (
        public id: number,
        public question: string,
        public answers: Answers[]
    ) {}
}