import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`. */
export type AchDetails = {
  /** The routing number for the bank account. */
  routingNumber?: string | null;
  /** The last few digits of the bank account number. */
  accountNumberSuffix?: string | null;
  /**
   * The type of the bank account performing the transfer. The account type can be `CHECKING`,
   * `SAVINGS`, or `UNKNOWN`.
   */
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
