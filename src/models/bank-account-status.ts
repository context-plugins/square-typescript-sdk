import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the current verification status of a `BankAccount` object. */
export const BankAccountStatus = {
  /**
   * Indicates that the verification process has started. Some features (for example, creditable or
   * debitable) may be provisionally enabled on the bank account.
   */
  VerificationInProgress: "VERIFICATION_IN_PROGRESS",
  /** Indicates that the bank account was successfully verified. */
  Verified: "VERIFIED",
  /**
   * Indicates that the bank account is disabled and is permanently unusable for funds transfer. A
   * bank account can be disabled because of a failed verification attempt or a failed deposit
   * attempt.
   */
  Disabled: "DISABLED",
} as const;
export type BankAccountStatus = (typeof BankAccountStatus)[keyof typeof BankAccountStatus] | (string & {});

export const bankAccountStatusSchema: EnumSchema<BankAccountStatus> =
  s.enumOf<BankAccountStatus>(BankAccountStatus);
