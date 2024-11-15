import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";

export default interface Geometry {
    getType(): string;
    isEmpty(): boolean;
    translate(dx:number,dy:number):void;
    clone(): Geometry
    getEnvelope():Envelope
    // GeometryVisitor(): Geometry
    accept(visitor: GeometryVisitor): void;
}