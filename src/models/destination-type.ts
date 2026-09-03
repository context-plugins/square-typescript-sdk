import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DestinationType = {
  BankAccount: "BANK_ACCOUNT",
  Card: "CARD",
  SquareBalance: "SQUARE_BALANCE",
  SquareStoredBalance: "SQUARE_STORED_BALANCE",
} as const;
export type DestinationType = (typeof DestinationType)[keyof typeof DestinationType] | (string & {});

export const destinationTypeSchema: EnumSchema<DestinationType> = s.enumOf<DestinationType>(DestinationType);
