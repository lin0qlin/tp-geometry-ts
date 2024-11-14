import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getType());
        expect(p.getCoordinate()).to.equal(undefined);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });
});

describe("test LineString", () => {
    it("test default constructor", () => {
      const line = new LineString();
      expect(line.getType()).to.equal("LineString");
      expect(line.getNumPoints()).to.equal(0);
      expect(line.getPointN(0)).to.equal(undefined);
    });
  
    it("test constructor with points", () => {
      const point1 = new Point([3.0, 4.0]);
      const point2 = new Point([2.0, 3.0]);
      const point3 = new Point([3.5, 2.5]);
      const point4 = new Point([2.5, 3.0]);
      const line = new LineString([point1, point2, point3, point4]);
  
      expect(line.getNumPoints()).to.equal(4);
      expect(line.getPointN(3)).to.deep.equal(point4);
    });
  });