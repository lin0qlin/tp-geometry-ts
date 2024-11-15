import "mocha";
import { expect } from "chai";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getType()).to.equal("Point");
        expect(p.isEmpty()).to.be.true;
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getType()).to.equal("Point");
        expect(p.isEmpty()).to.equal(false);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });
    it("test translate", () => {
        const p = new Point([3.0, 4.0]);
        p.translate(1.0, 2.0);
        expect(p.getCoordinate()).to.deep.equal([4.0, 6.0]);
      });

    it("test clone", () => {
        const p = new Point([3.0, 4.0]);
        const copyPoint = p.clone() as Point;

        // Translate the copy
        copyPoint.translate(10.0, 10.0);

        // Assert the original point has not been modified
        expect(p.getCoordinate()).to.deep.equal([3.0, 4.0]);

        // Assert the cloned point has been translated
        expect(copyPoint.getCoordinate()).to.deep.equal([13.0, 14.0]);
    });

    it("test envelope", () => {
        const p = new Point([3.0,4.0]);
        const e = p.getEnvelope();
        expect(e.getXmax()).to.equal(3.0);
        expect(e.getXmax()).to.equal(3.0);
        expect(e.getYmin()).to.equal(4.0);
        expect(e.getYmax()).to.equal(4.0);

        expect(e.toString()).to.equal("Envelope [bottomLeft: (3, 4), topRight: (3, 4)]");
    });
});