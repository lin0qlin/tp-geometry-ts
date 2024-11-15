import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import LogGeometryVisitor from "../src/LogGeometryVisitor";

describe("test GeometryVisitor", () => {
  it("test GeometryVisitor point vide", () => {
    const emptyPoint = new Point();
    let logOutput = "";
    const visitor = new LogGeometryVisitor(function (message) {
      logOutput = message;
    });
    emptyPoint.accept(visitor);
    expect(logOutput).to.equal("Je suis un point vide.");
  });

  it("test GeometryVisitor point", () => {
    const p = new Point([3.0, 4.0]);
    let logOutput = "";
    const visitor = new LogGeometryVisitor(function (message) {
      logOutput = message;
    });
    p.accept(visitor);
    expect(logOutput).to.equal("Je suis un point avec x=3 et y=4.");
  });

  it("test GeometryVisitor line vide", () => {
    const emptyLine = new LineString();
    let logOutput = "";
    const visitor = new LogGeometryVisitor(function (message) {
      logOutput = message;
    });
    emptyLine.accept(visitor);
    expect(logOutput).to.equal("Je suis une polyligne vide.");
  });

  it("test GeometryVisitor lineString", () => {
    const point1 = new Point([3.0, 4.0]);
    const point2 = new Point([2.0, 3.0]);
    const line = new LineString([point1, point2]);
    let logOutput = "";
    const visitor = new LogGeometryVisitor(function (message) {
      logOutput = message;
    });

    // Test lineString with points
    line.accept(visitor);
    expect(logOutput).to.equal("Je suis une polyligne définie par 2 point(s).");
  });
});