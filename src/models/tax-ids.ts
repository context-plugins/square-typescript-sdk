import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaxIds = {
  euVat?: string;
  frSiret?: string;
  frNaf?: string;
  esNif?: string;
  jpQii?: string;
};

export const taxIdsSchema: Schema<TaxIds> = s.object<TaxIds>({
  euVat: s.optional(s.string()),
  frSiret: s.optional(s.string()),
  frNaf: s.optional(s.string()),
  esNif: s.optional(s.string()),
  jpQii: s.optional(s.string()),
  _keysMap: {
    euVat: "eu_vat",
    frSiret: "fr_siret",
    frNaf: "fr_naf",
    esNif: "es_nif",
    jpQii: "jp_qii",
  },
});
