import Envelope from "./Envelope";
import Coordinate from "./Coordinate";
import Point from "./Point";
import LineString from "./LineString";

export default class EnvelopeBuilder {
  private Xmin: number = Infinity;
  private Ymin: number = Infinity;
  private Xmax: number = -Infinity;
  private Ymax: number = -Infinity;

  visitPoint(point: Point): void {
    if (!point.isEmpty()) {
      this.insert(point.getCoordinate());
    }
  }

  visitLineString(lineString: LineString): void {
    if (!lineString.isEmpty()) {
      for (let i = 0; i < lineString.getNumPoints(); i++) {
        const point = lineString.getPointN(i);
        if (point && !point.isEmpty()) {
          this.insert(point.getCoordinate());
        }
      }
    }
  }


  insert(coordinate: Coordinate): void {
    if (coordinate.length === 2) {
      const [x, y] = coordinate;
      if (x < this.Xmin) this.Xmin = x;
      if (y < this.Ymin) this.Ymin = y;
      if (x > this.Xmax) this.Xmax = x;
      if (y > this.Ymax) this.Ymax = y;
    }
  }

  build(): Envelope {
    if (this.Xmin === Infinity || this.Ymin === Infinity) {
      return new Envelope();
    }
    const bottomLeft: Coordinate = [this.Xmin, this.Ymin];
    const topRight: Coordinate = [this.Xmax, this.Ymax];
    return new Envelope(bottomLeft, topRight);
  }
}
