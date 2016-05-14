import {TasteCoordinates} from "./taste-coordinates";

export class Food {
	constructor(
		public name: string,
		public description: string,
		public imageUrl: string,
		public cooridinates: TasteCoordinates
	) {}
}
