import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1OrderHistoryEntryAction = {
  OrderPlaced: "ORDER_PLACED",
  Declined: "DECLINED",
  PaymentReceived: "PAYMENT_RECEIVED",
  Canceled: "CANCELED",
  Completed: "COMPLETED",
  Refunded: "REFUNDED",
  Expired: "EXPIRED",
} as const;
export type V1OrderHistoryEntryAction =
  | (typeof V1OrderHistoryEntryAction)[keyof typeof V1OrderHistoryEntryAction]
  | (string & {});

export const v1OrderHistoryEntryActionSchema: EnumSchema<V1OrderHistoryEntryAction> =
  s.enumOf<V1OrderHistoryEntryAction>(V1OrderHistoryEntryAction);
