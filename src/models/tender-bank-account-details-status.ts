import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the bank account payment's current status. */
export const TenderBankAccountDetailsStatus = {
  /** The bank account payment is in progress. */
  Pending: "PENDING",
  /** The bank account payment has been completed. */
  Completed: "COMPLETED",
  /** The bank account payment failed. */
  Failed: "FAILED",
} as const;
export type TenderBankAccountDetailsStatus =
  | (typeof TenderBankAccountDetailsStatus)[keyof typeof TenderBankAccountDetailsStatus]
  | (string & {});

export const tenderBankAccountDetailsStatusSchema: EnumSchema<TenderBankAccountDetailsStatus> =
  s.enumOf<TenderBankAccountDetailsStatus>(TenderBankAccountDetailsStatus);
