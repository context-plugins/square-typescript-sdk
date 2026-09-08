import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  tenderBankAccountDetailsStatusSchema,
  type TenderBankAccountDetailsStatus,
} from "./tender-bank-account-details-status.js";

/**
 * Represents the details of a tender with `type` `BANK_ACCOUNT`.
 *
 * See [BankAccountPaymentDetails](entity:BankAccountPaymentDetails) for more exposed details of a
 * bank account payment.
 */
export type TenderBankAccountDetails = {
  /** Indicates the bank account payment's current status. */
  status?: TenderBankAccountDetailsStatus;
};

export const tenderBankAccountDetailsSchema: Schema<TenderBankAccountDetails> =
  s.object<TenderBankAccountDetails>({
    status: s.optional(s.lazy(() => tenderBankAccountDetailsStatusSchema)),
  });
