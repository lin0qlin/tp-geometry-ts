import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktVisitor from "../src/WktVisitor";

describe("test WktVisitor", () => {
  it("test WktVisitor with empty point", () => {
    const emptyPoint = new Point();
    const visitor = new WktVisitor();
    emptyPoint.accept(visitor);
    expect(visitor.getResult()).to.equal("POINT EMPTY");
  });

  it("test WktVisitor with point", () => {
    const point = new Point([3.0, 4.0]);
    const visitor = new WktVisitor();
    point.accept(visitor);
    expect(visitor.getResult()).to.equal("POINT(3 4)");
  });

  it("test WktVisitor with empty lineString", () => {
    const emptyLine = new LineString();
    const visitor = new WktVisitor();
    emptyLine.accept(visitor);
    expect(visitor.getResult()).to.equal("LINESTRING EMPTY");
  });

  it("test WktVisitor with lineString", () => {
    const point1 = new Point([3.0, 4.0]);
    const point2 = new Point([2.0, 3.0]);
    const lineString = new LineString([point1, point2]);
    const visitor = new WktVisitor();
    lineString.accept(visitor);
    expect(visitor.getResult()).to.equal("LINESTRING(3 4, 2 3)");
  });
});
