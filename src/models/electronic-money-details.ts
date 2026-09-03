import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { felicaDetailsSchema, type FelicaDetails } from "./felica-details.js";

export type ElectronicMoneyDetails = {
  felicaDetails?: FelicaDetails;
};

export const electronicMoneyDetailsSchema: Schema<ElectronicMoneyDetails> = s.object<ElectronicMoneyDetails>({
  felicaDetails: s.optional(s.lazy(() => felicaDetailsSchema)),
  _keysMap: {
    felicaDetails: "felica_details",
  },
});
