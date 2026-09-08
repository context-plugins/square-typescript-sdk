import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** List of possible destinations against which a payout can be made. */
export const DestinationType = {
  /** An external bank account outside of Square. */
  BankAccount: "BANK_ACCOUNT",
  /** An external card outside of Square used for the transfer. */
  Card: "CARD",
  SquareBalance: "SQUARE_BALANCE",
  /** Square Checking or Savings account (US), Square Card (CA) */
  SquareStoredBalance: "SQUARE_STORED_BALANCE",
} as const;
export type DestinationType = (typeof DestinationType)[keyof typeof DestinationType] | (string & {});

export const destinationTypeSchema: EnumSchema<DestinationType> = s.enumOf<DestinationType>(DestinationType);
