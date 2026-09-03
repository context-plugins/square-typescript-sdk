import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CashAppDetails = {
  buyerFullName?: string | null;
  buyerCountryCode?: string | null;
  buyerCashtag?: string;
};

export const cashAppDetailsSchema: Schema<CashAppDetails> = s.object<CashAppDetails>({
  buyerFullName: s.optionalNullable(s.string()),
  buyerCountryCode: s.optionalNullable(s.string()),
  buyerCashtag: s.optional(s.string()),
  _keysMap: {
    buyerFullName: "buyer_full_name",
    buyerCountryCode: "buyer_country_code",
    buyerCashtag: "buyer_cashtag",
  },
});
