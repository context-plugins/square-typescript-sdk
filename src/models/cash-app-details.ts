import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Additional details about `WALLET` type payments with the `brand` of `CASH_APP`. */
export type CashAppDetails = {
  /** The name of the Cash App account holder. */
  buyerFullName?: string | null;
  /**
   * The country of the Cash App account holder, in ISO 3166-1-alpha-2 format.
   *
   * For possible values, see [Country](entity:Country).
   */
  buyerCountryCode?: string | null;
  /** $Cashtag of the Cash App account holder. */
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
