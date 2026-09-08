import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The schedule type of the pickup fulfillment. */
export const FulfillmentPickupDetailsScheduleType = {
  /** Indicates that the fulfillment will be picked up at a scheduled pickup time. */
  Scheduled: "SCHEDULED",
  /**
   * Indicates that the fulfillment will be picked up as soon as possible and should be prepared
   * immediately.
   */
  Asap: "ASAP",
} as const;
export type FulfillmentPickupDetailsScheduleType =
  | (typeof FulfillmentPickupDetailsScheduleType)[keyof typeof FulfillmentPickupDetailsScheduleType]
  | (string & {});

export const fulfillmentPickupDetailsScheduleTypeSchema: EnumSchema<FulfillmentPickupDetailsScheduleType> =
  s.enumOf<FulfillmentPickupDetailsScheduleType>(FulfillmentPickupDetailsScheduleType);
