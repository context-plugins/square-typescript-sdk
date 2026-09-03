import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TenderBankAccountDetailsStatus = {
  Pending: "PENDING",
  Completed: "COMPLETED",
  Failed: "FAILED",
} as const;
export type TenderBankAccountDetailsStatus =
  | (typeof TenderBankAccountDetailsStatus)[keyof typeof TenderBankAccountDetailsStatus]
  | (string & {});

export const tenderBankAccountDetailsStatusSchema: EnumSchema<TenderBankAccountDetailsStatus> =
  s.enumOf<TenderBankAccountDetailsStatus>(TenderBankAccountDetailsStatus);
