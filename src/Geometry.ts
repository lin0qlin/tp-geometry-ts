import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";

export default interface Geometry {
    getType(): string;
    isEmpty(): boolean;
    translate(dx:number,dy:number):void;
    clone(): Geometry
    getEnvelope():Envelope
    asText(): string;
    accept(visitor: GeometryVisitor): void;
}