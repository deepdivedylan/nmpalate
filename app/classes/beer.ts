import {TasteCoordinates} from "./taste-coordinates";

export class Beer{
	constructor(
		public id: number,
		public name: string,
		public description: string,
		public imgUrl: string,
		public coordinates: TasteCoordinates
	){}
}
