import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderFulfillmentPickupDetailsScheduleType = {
  Scheduled: "SCHEDULED",
  Asap: "ASAP",
} as const;
export type OrderFulfillmentPickupDetailsScheduleType =
  | (typeof OrderFulfillmentPickupDetailsScheduleType)[keyof typeof OrderFulfillmentPickupDetailsScheduleType]
  | (string & {});

export const orderFulfillmentPickupDetailsScheduleTypeSchema: EnumSchema<OrderFulfillmentPickupDetailsScheduleType> =
  s.enumOf<OrderFulfillmentPickupDetailsScheduleType>(OrderFulfillmentPickupDetailsScheduleType);
