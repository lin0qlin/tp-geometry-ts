import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test LineString", () => {
  it("test default constructor", () => {
    const line = new LineString();
    expect(line.getType()).to.equal("LineString");
    expect(line.isEmpty()).to.be.true;
    expect(line.getNumPoints()).to.equal(0);
    expect(line.getPointN(0)).to.equal(undefined);
  });

  it("test constructor with points", () => {
    const point1 = new Point([3.0, 4.0]);
    const point2 = new Point([2.0, 3.0]);
    const point3 = new Point([3.5, 2.5]);
    const point4 = new Point([2.5, 3.0]);
    const line = new LineString([point1, point2, point3, point4]);

    expect(line.getType()).to.equal("LineString");
    expect(line.isEmpty()).to.equal(false);
    expect(line.getNumPoints()).to.equal(4);
    expect(line.getPointN(3)).to.deep.equal(point4);
  });


  it("test translate", () => {
    const point1 = new Point([3.0, 4.0]);
    const point2 = new Point([2.0, 3.0]);

    const line = new LineString([point1, point2]);

    line.translate(1.0, 2.0);

    expect(line.getPointN(0)?.getCoordinate()).to.deep.equal([4.0, 6.0]);
    expect(line.getPointN(1)?.getCoordinate()).to.deep.equal([3.0, 5.0]);
  });

  it("test clone", () => {
    const point1 = new Point([3.0, 4.0]);
    const point2 = new Point([2.0, 3.0]);
    const point3 = new Point([3.5, 2.5]);
    const line = new LineString([point1, point2]);
    const copyLine = line.clone() as LineString;

    // Translate the copy
    copyLine.translate(10.0, 10.0);

    // Assert the original line has not been modified
    expect(line.getPointN(0)?.getCoordinate()).to.deep.equal([3.0, 4.0]);
    expect(line.getPointN(1)?.getCoordinate()).to.deep.equal([2.0, 3.0]);

    // Assert the cloned line has been translated
    expect(copyLine.getPointN(0)?.getCoordinate()).to.deep.equal([13.0, 14.0]);
    expect(copyLine.getPointN(1)?.getCoordinate()).to.deep.equal([12.0, 13.0]);
  });

});
