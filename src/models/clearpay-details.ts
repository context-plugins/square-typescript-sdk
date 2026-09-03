import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClearpayDetails = {
  emailAddress?: string | null;
};

export const clearpayDetailsSchema: Schema<ClearpayDetails> = s.object<ClearpayDetails>({
  emailAddress: s.optionalNullable(s.string()),
  _keysMap: {
    emailAddress: "email_address",
  },
});
