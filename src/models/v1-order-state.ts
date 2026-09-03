import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1OrderState = {
  Pending: "PENDING",
  Open: "OPEN",
  Completed: "COMPLETED",
  Canceled: "CANCELED",
  Refunded: "REFUNDED",
  Rejected: "REJECTED",
} as const;
export type V1OrderState = (typeof V1OrderState)[keyof typeof V1OrderState] | (string & {});

export const v1OrderStateSchema: EnumSchema<V1OrderState> = s.enumOf<V1OrderState>(V1OrderState);
