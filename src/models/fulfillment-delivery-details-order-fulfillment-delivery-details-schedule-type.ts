import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The schedule type of the delivery fulfillment. */
export const FulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleType = {
  /** Indicates the fulfillment to deliver at a scheduled deliver time. */
  Scheduled: "SCHEDULED",
  /**
   * Indicates that the fulfillment to deliver as soon as possible and should be prepared
   * immediately.
   */
  Asap: "ASAP",
} as const;
export type FulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleType =
  | (typeof FulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleType)[keyof typeof FulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleType]
  | (string & {});

export const fulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleTypeSchema: EnumSchema<FulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleType> =
  s.enumOf<FulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleType>(
    FulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleType,
  );
