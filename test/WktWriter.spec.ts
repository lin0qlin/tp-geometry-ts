import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktWriter from "../src/WktWriter";


describe("test WktWriter", () => {
    it("test point empty", () => {
        const p = new Point();
        const w = new WktWriter();
        const wkt = w.write(p);

        expect(wkt).to.equal("POINT EMPTY");

    });

    it("test point", () => {
        const p = new Point([3.0,4.0]);
        const w = new WktWriter();
        const wkt = w.write(p);
        expect(wkt).to.equal("POINT(3 4)");

    });

    it("test linestring empty", () => {
        const line = new LineString();
        const w = new WktWriter();
        const wkt = w.write(line);

        expect(wkt).to.equal("LINESTRING EMPTY");
    });

    it("test linestring", () => {
        const point1 = new Point([3.0, 4.0]);
        const point2 = new Point([2.0, 3.0]);
        const line = new LineString([point1, point2]);

        const w = new WktWriter();
        const wkt = w.write(line);

        expect(wkt).to.equal("LINESTRING(3 4,2 3)");
    });
});