import "mocha";
import { expect } from "chai";
import EnvelopeBuilder from "../src/EnvelopeBuilder";
import Envelope from "../src/Envelope";

describe("test EnvelopeBuilder", () => {
  it("test EnvelopeBuilder", () => {
    // Création d'une instance de EnvelopeBuilder
    const builder = new EnvelopeBuilder();
    builder.insert([0.0, 1.0]);
    builder.insert([2.0, 0.0]);
    builder.insert([1.0, 3.0]);

    // Récupération du résultat
    const result: Envelope = builder.build();

    // Vérifications des valeurs de l'enveloppe
    expect(result.getXmin()).to.equal(0.0);
    expect(result.getYmin()).to.equal(0.0);
    expect(result.getXmax()).to.equal(2.0);
    expect(result.getYmax()).to.equal(3.0);
  });

  it("test empty envelope", () => {
    // Création d'une instance vide de EnvelopeBuilder
    const builder = new EnvelopeBuilder();

    // Récupération du résultat
    const result: Envelope = builder.build();

    // Vérification que l'enveloppe est vide
    expect(result.isEmpty()).to.be.true;
  });
});
