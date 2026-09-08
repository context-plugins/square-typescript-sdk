import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current state of this fulfillment. */
export const OrderFulfillmentState = {
  /** Indicates that the fulfillment has been proposed. */
  Proposed: "PROPOSED",
  /** Indicates that the fulfillment has been reserved. */
  Reserved: "RESERVED",
  /** Indicates that the fulfillment has been prepared. */
  Prepared: "PREPARED",
  /** Indicates that the fulfillment was successfully completed. */
  Completed: "COMPLETED",
  /** Indicates that the fulfillment was canceled. */
  Canceled: "CANCELED",
  /** Indicates that the fulfillment failed to be completed, but was not explicitly canceled. */
  Failed: "FAILED",
} as const;
export type OrderFulfillmentState =
  | (typeof OrderFulfillmentState)[keyof typeof OrderFulfillmentState]
  | (string & {});

export const orderFulfillmentStateSchema: EnumSchema<OrderFulfillmentState> =
  s.enumOf<OrderFulfillmentState>(OrderFulfillmentState);
