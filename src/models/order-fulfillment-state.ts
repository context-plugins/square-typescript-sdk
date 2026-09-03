import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderFulfillmentState = {
  Proposed: "PROPOSED",
  Reserved: "RESERVED",
  Prepared: "PREPARED",
  Completed: "COMPLETED",
  Canceled: "CANCELED",
  Failed: "FAILED",
} as const;
export type OrderFulfillmentState =
  | (typeof OrderFulfillmentState)[keyof typeof OrderFulfillmentState]
  | (string & {});

export const orderFulfillmentStateSchema: EnumSchema<OrderFulfillmentState> =
  s.enumOf<OrderFulfillmentState>(OrderFulfillmentState);
