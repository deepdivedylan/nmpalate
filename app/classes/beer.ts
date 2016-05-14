import {TasteCoordinates} from "./taste-coordinates";

export class Beer{
	constructor(
		public name: string,
		public description: string,
		public imgUrl: string,
		public coordinates: TasteCoordinates

	){}
}