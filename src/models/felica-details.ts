import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  felicaDetailsFelicaBrandSchema,
  type FelicaDetailsFelicaBrand,
} from "./felica-details-felica-brand.js";

export type FelicaDetails = {
  terminalId?: string | null;
  felicaMaskedCardNumber?: string | null;
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
