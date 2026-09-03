import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleType = {
  Scheduled: "SCHEDULED",
  Asap: "ASAP",
} as const;
export type FulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleType =
  | (typeof FulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleType)[keyof typeof FulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleType]
  | (string & {});

export const fulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleTypeSchema: EnumSchema<FulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleType> =
  s.enumOf<FulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleType>(
    FulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleType,
  );
