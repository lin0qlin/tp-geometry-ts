import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";

export default class WktVisitor implements GeometryVisitor {
  private buffer: string = "";

  visitPoint(point: Point): void {
    if (point.isEmpty()) {
      this.buffer = "POINT EMPTY";
    } else {
      const x = point.x();
      const y = point.y();
      this.buffer = `POINT(${x} ${y})`;
    }
  }

  visitLineString(lineString: LineString): void {
    if (lineString.isEmpty()) {
      this.buffer = "LINESTRING EMPTY";
    } else {
      const coordinates = [];
      for (let i = 0; i < lineString.getNumPoints(); i++) {
        const point = lineString.getPointN(i);
        if (point) {
          coordinates.push(`${point.x()} ${point.y()}`);
        }
      }
      this.buffer = `LINESTRING(${coordinates.join(", ")})`;
    }
  }

  getResult(): string {
    return this.buffer;
  }
}
