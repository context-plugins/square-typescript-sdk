import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The schedule type of the pickup fulfillment. */
export const OrderFulfillmentPickupDetailsScheduleType = {
  /** Indicates that the fulfillment will be picked up at a scheduled pickup time. */
  Scheduled: "SCHEDULED",
  /**
   * Indicates that the fulfillment will be picked up as soon as possible and should be prepared
   * immediately.
   */
  Asap: "ASAP",
} as const;
export type OrderFulfillmentPickupDetailsScheduleType =
  | (typeof OrderFulfillmentPickupDetailsScheduleType)[keyof typeof OrderFulfillmentPickupDetailsScheduleType]
  | (string & {});

export const orderFulfillmentPickupDetailsScheduleTypeSchema: EnumSchema<OrderFulfillmentPickupDetailsScheduleType> =
  s.enumOf<OrderFulfillmentPickupDetailsScheduleType>(OrderFulfillmentPickupDetailsScheduleType);
