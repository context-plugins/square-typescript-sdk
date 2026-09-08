import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Additional details about Clearpay payments. */
export type ClearpayDetails = {
  /** Email address on the buyer's Clearpay account. */
  emailAddress?: string | null;
};

export const clearpayDetailsSchema: Schema<ClearpayDetails> = s.object<ClearpayDetails>({
  emailAddress: s.optionalNullable(s.string()),
  _keysMap: {
    emailAddress: "email_address",
  },
});
