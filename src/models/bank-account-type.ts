import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the financial purpose of the bank account. */
export const BankAccountType = {
  /**
   * An account at a financial institution against which checks can be drawn by the account
   * depositor.
   */
  Checking: "CHECKING",
  /**
   * An account at a financial institution that pays interest but cannot be used directly as money
   * in the narrow sense of a medium of exchange.
   */
  Savings: "SAVINGS",
  /** An account at a financial institution that contains a deposit of funds and/or securities. */
  Investment: "INVESTMENT",
  /** An account at a financial institution which cannot be described by the other types. */
  Other: "OTHER",
  /**
   * An account at a financial institution against which checks can be drawn specifically for
   * business purposes (non-personal use).
   */
  BusinessChecking: "BUSINESS_CHECKING",
} as const;
export type BankAccountType = (typeof BankAccountType)[keyof typeof BankAccountType] | (string & {});

export const bankAccountTypeSchema: EnumSchema<BankAccountType> = s.enumOf<BankAccountType>(BankAccountType);
