import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderFulfillmentDeliveryDetailsScheduleType = {
  Scheduled: "SCHEDULED",
  Asap: "ASAP",
} as const;
export type OrderFulfillmentDeliveryDetailsScheduleType =
  | (typeof OrderFulfillmentDeliveryDetailsScheduleType)[keyof typeof OrderFulfillmentDeliveryDetailsScheduleType]
  | (string & {});

export const orderFulfillmentDeliveryDetailsScheduleTypeSchema: EnumSchema<OrderFulfillmentDeliveryDetailsScheduleType> =
  s.enumOf<OrderFulfillmentDeliveryDetailsScheduleType>(OrderFulfillmentDeliveryDetailsScheduleType);
