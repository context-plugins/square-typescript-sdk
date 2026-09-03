import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferOrderStatus = {
  Draft: "DRAFT",
  Started: "STARTED",
  PartiallyReceived: "PARTIALLY_RECEIVED",
  Completed: "COMPLETED",
  Canceled: "CANCELED",
} as const;
export type TransferOrderStatus =
  | (typeof TransferOrderStatus)[keyof typeof TransferOrderStatus]
  | (string & {});

export const transferOrderStatusSchema: EnumSchema<TransferOrderStatus> =
  s.enumOf<TransferOrderStatus>(TransferOrderStatus);
