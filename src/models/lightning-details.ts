import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Additional details about `WALLET` type payments with the `brand` of `LIGHTNING`. */
export type LightningDetails = {
  /** Payment URL for the lightning payment, a.k.a. the invoice. */
  paymentUrl?: string | null;
};

export const lightningDetailsSchema: Schema<LightningDetails> = s.object<LightningDetails>({
  paymentUrl: s.optionalNullable(s.string()),
  _keysMap: {
    paymentUrl: "payment_url",
  },
});
