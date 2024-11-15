import Geometry from "./Geometry";
import WktVisitor from "./WktVisitor";

export default abstract class AbstractGeometry implements Geometry {
  abstract getType(): string;
  abstract isEmpty(): boolean;
  abstract translate(dx: number, dy: number): void;
  abstract clone(): Geometry;
  abstract getEnvelope(): any;

  asText(): string {
    const visitor = new WktVisitor();
    this.accept(visitor);
    return visitor.getResult();
  }

  // Ensure that all classes extending AbstractGeometry must implement accept()
  abstract accept(visitor: any): void;
}