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
});
