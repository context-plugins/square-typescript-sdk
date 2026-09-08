import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  felicaDetailsFelicaBrandSchema,
  type FelicaDetailsFelicaBrand,
} from "./felica-details-felica-brand.js";

/** Details for Felica payments. */
export type FelicaDetails = {
  /** The terminal id for a Felica payment. */
  terminalId?: string | null;
  /** The masked card number for a Felica payment. */
  felicaMaskedCardNumber?: string | null;
  /** A Felica card's "sub-brand"--the actual brand on the Felica card */
  felicaBrand?: FelicaDetailsFelicaBrand;
};

export const felicaDetailsSchema: Schema<FelicaDetails> = s.object<FelicaDetails>({
  terminalId: s.optionalNullable(s.string()),
  felicaMaskedCardNumber: s.optionalNullable(s.string()),
  felicaBrand: s.optional(s.lazy(() => felicaDetailsFelicaBrandSchema)),
  _keysMap: {
    terminalId: "terminal_id",
    felicaMaskedCardNumber: "felica_masked_card_number",
    felicaBrand: "felica_brand",
  },
});
