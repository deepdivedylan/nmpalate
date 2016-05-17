import {Answers} from "./answers";

export class Question {
    constructor (
        public id: number,
        public text: string,
        public axis: string,
        public answers: Answers[]
    ) {}
}