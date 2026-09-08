import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The schedule type of the delivery fulfillment. */
export const OrderFulfillmentDeliveryDetailsScheduleType = {
  /** Indicates the fulfillment to deliver at a scheduled deliver time. */
  Scheduled: "SCHEDULED",
  /**
   * Indicates that the fulfillment to deliver as soon as possible and should be prepared
   * immediately.
   */
  Asap: "ASAP",
} as const;
export type OrderFulfillmentDeliveryDetailsScheduleType =
  | (typeof OrderFulfillmentDeliveryDetailsScheduleType)[keyof typeof OrderFulfillmentDeliveryDetailsScheduleType]
  | (string & {});

export const orderFulfillmentDeliveryDetailsScheduleTypeSchema: EnumSchema<OrderFulfillmentDeliveryDetailsScheduleType> =
  s.enumOf<OrderFulfillmentDeliveryDetailsScheduleType>(OrderFulfillmentDeliveryDetailsScheduleType);
