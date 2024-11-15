import Coordinate from "./Coordinate";
// import Geometry from "./Geometry";

export default class Envelope {
  private bottomLeft: Coordinate;
  private topRight: Coordinate;

  constructor(bottomLeft: Coordinate = [], topRight: Coordinate = []) {
    this.bottomLeft = bottomLeft;
    this.topRight = topRight;
  }

  isEmpty(): boolean {
    return this.bottomLeft.length === 0 || this.topRight.length === 0;
  }

  getXmin(): number {
    return this.isEmpty() ? Number.NaN : this.bottomLeft[0];
  }

  getYmin(): number {
    return this.isEmpty() ? Number.NaN : this.bottomLeft[1];
  }

  getXmax(): number {
    return this.isEmpty() ? Number.NaN : this.topRight[0];
  }

  getYmax(): number {
    return this.isEmpty() ? Number.NaN : this.topRight[1];
  }

  toString(): string {
    return `Envelope [bottomLeft: (${this.bottomLeft[0]}, ${this.bottomLeft[1]}), topRight: (${this.topRight[0]}, ${this.topRight[1]})]`;
  }


}