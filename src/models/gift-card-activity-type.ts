import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GiftCardActivityType = {
  Activate: "ACTIVATE",
  Load: "LOAD",
  Redeem: "REDEEM",
  ClearBalance: "CLEAR_BALANCE",
  Deactivate: "DEACTIVATE",
  AdjustIncrement: "ADJUST_INCREMENT",
  AdjustDecrement: "ADJUST_DECREMENT",
  Refund: "REFUND",
  UnlinkedActivityRefund: "UNLINKED_ACTIVITY_REFUND",
  Import: "IMPORT",
  Block: "BLOCK",
  Unblock: "UNBLOCK",
  ImportReversal: "IMPORT_REVERSAL",
  TransferBalanceFrom: "TRANSFER_BALANCE_FROM",
  TransferBalanceTo: "TRANSFER_BALANCE_TO",
} as const;
export type GiftCardActivityType =
  | (typeof GiftCardActivityType)[keyof typeof GiftCardActivityType]
  | (string & {});

export const giftCardActivityTypeSchema: EnumSchema<GiftCardActivityType> =
  s.enumOf<GiftCardActivityType>(GiftCardActivityType);
