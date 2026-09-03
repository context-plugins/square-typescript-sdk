import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BankAccountStatus = {
  VerificationInProgress: "VERIFICATION_IN_PROGRESS",
  Verified: "VERIFIED",
  Disabled: "DISABLED",
} as const;
export type BankAccountStatus = (typeof BankAccountStatus)[keyof typeof BankAccountStatus] | (string & {});

export const bankAccountStatusSchema: EnumSchema<BankAccountStatus> =
  s.enumOf<BankAccountStatus>(BankAccountStatus);
