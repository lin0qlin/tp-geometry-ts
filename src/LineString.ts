import Point from "./Point";
import Geometry from "./Geometry";

export default class LineString implements Geometry{
  private points: Array<Point>;

  constructor(points: Array<Point> = []) {
    this.points = points ? points:[];
  }

  getType(): string {
    return "LineString";
  }

  isEmpty(): boolean {
    return this.points.length === 0;
  }

  getNumPoints(): number {
    return this.points.length;
  }

  getPointN(n: number): Point | undefined {
    return this.points[n];
  }

  translate(dx: number, dy: number): void {
    if (!this.isEmpty()) {
        this.points.forEach((point) => point.translate(dx, dy));
      }
  }
}