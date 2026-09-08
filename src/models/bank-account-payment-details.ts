import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achDetailsSchema, type AchDetails } from "./ach-details.js";
import { errorSchema, type Error } from "./error.js";

/** Additional details about BANK_ACCOUNT type payments. */
export type BankAccountPaymentDetails = {
  /** The name of the bank associated with the bank account. */
  bankName?: string | null;
  /** The type of the bank transfer. The type can be `ACH` or `UNKNOWN`. */
  transferType?: string | null;
  /**
   * The ownership type of the bank account performing the transfer. The type can be `INDIVIDUAL`,
   * `COMPANY`, or `ACCOUNT_TYPE_UNKNOWN`.
   */
  accountOwnershipType?: string | null;
  /**
   * Uniquely identifies the bank account for this seller and can be used to determine if payments
   * are from the same bank account.
   */
  fingerprint?: string | null;
  /** The two-letter ISO code representing the country the bank account is located in. */
  country?: string | null;
  /** The statement description as sent to the bank. */
  statementDescription?: string | null;
  /** ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`. */
  achDetails?: AchDetails;
  /** Information about errors encountered during the request. */
  errors?: Error[] | null;
};

export const bankAccountPaymentDetailsSchema: Schema<BankAccountPaymentDetails> =
  s.object<BankAccountPaymentDetails>({
    bankName: s.optionalNullable(s.string()),
    transferType: s.optionalNullable(s.string()),
    accountOwnershipType: s.optionalNullable(s.string()),
    fingerprint: s.optionalNullable(s.string()),
    country: s.optionalNullable(s.string()),
    statementDescription: s.optionalNullable(s.string()),
    achDetails: s.optional(s.lazy(() => achDetailsSchema)),
    errors: s.optionalNullable(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      bankName: "bank_name",
      transferType: "transfer_type",
      accountOwnershipType: "account_ownership_type",
      statementDescription: "statement_description",
      achDetails: "ach_details",
    },
  });
