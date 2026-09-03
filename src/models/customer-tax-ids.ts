import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomerTaxIds = {
  euVat?: string | null;
};

export const customerTaxIdsSchema: Schema<CustomerTaxIds> = s.object<CustomerTaxIds>({
  euVat: s.optionalNullable(s.string()),
  _keysMap: {
    euVat: "eu_vat",
  },
});
