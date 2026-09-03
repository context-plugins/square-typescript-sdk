import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LightningDetails = {
  paymentUrl?: string | null;
};

export const lightningDetailsSchema: Schema<LightningDetails> = s.object<LightningDetails>({
  paymentUrl: s.optionalNullable(s.string()),
  _keysMap: {
    paymentUrl: "payment_url",
  },
});
