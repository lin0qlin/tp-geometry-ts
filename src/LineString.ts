import Point from "./Point";
import Geometry from "./Geometry";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";

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

  clone(): LineString {
    const clonedPoints = this.points.map((point) => point.clone() as Point); // Copie en profondeur des points
    return new LineString(clonedPoints);
  }

  getEnvelope(): Envelope {
    const e = new EnvelopeBuilder();
    for (const p of this.points) {
      e.insert(p.getCoordinate());
    }
    return e.build();
  }
  

}