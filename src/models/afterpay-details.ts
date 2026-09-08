import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Additional details about Afterpay payments. */
export type AfterpayDetails = {
  /** Email address on the buyer's Afterpay account. */
  emailAddress?: string | null;
};

export const afterpayDetailsSchema: Schema<AfterpayDetails> = s.object<AfterpayDetails>({
  emailAddress: s.optionalNullable(s.string()),
  _keysMap: {
    emailAddress: "email_address",
  },
});
