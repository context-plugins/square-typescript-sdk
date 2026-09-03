import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achDetailsSchema, type AchDetails } from "./ach-details.js";
import { errorSchema, type Error } from "./error.js";

export type BankAccountPaymentDetails = {
  bankName?: string | null;
  transferType?: string | null;
  accountOwnershipType?: string | null;
  fingerprint?: string | null;
  country?: string | null;
  statementDescription?: string | null;
  achDetails?: AchDetails;
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
