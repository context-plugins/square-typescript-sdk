import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AchDetails = {
  routingNumber?: string | null;
  accountNumberSuffix?: string | null;
  accountType?: string | null;
};

export const achDetailsSchema: Schema<AchDetails> = s.object<AchDetails>({
  routingNumber: s.optionalNullable(s.string()),
  accountNumberSuffix: s.optionalNullable(s.string()),
  accountType: s.optionalNullable(s.string()),
  _keysMap: {
    routingNumber: "routing_number",
    accountNumberSuffix: "account_number_suffix",
    accountType: "account_type",
  },
});
