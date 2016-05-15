export class TasteCoordinates {
	constructor(
		public savory: number,
		public spice: number,
		public sweet: number
	) {}

	euclideanDistance(x: TasteCoordinates) {
		let squares = Math.pow(x.savory - this.savory, 2.0) + Math.pow(x.spice - this.spice, 2.0) + Math.pow(x.sweet - this.sweet, 2.0);
		let distance = Math.sqrt(squares);
		return(distance);
	}
}
