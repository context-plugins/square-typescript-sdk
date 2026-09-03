import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AfterpayDetails = {
  emailAddress?: string | null;
};

export const afterpayDetailsSchema: Schema<AfterpayDetails> = s.object<AfterpayDetails>({
  emailAddress: s.optionalNullable(s.string()),
  _keysMap: {
    emailAddress: "email_address",
  },
});
