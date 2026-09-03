import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FulfillmentPickupDetailsScheduleType = {
  Scheduled: "SCHEDULED",
  Asap: "ASAP",
} as const;
export type FulfillmentPickupDetailsScheduleType =
  | (typeof FulfillmentPickupDetailsScheduleType)[keyof typeof FulfillmentPickupDetailsScheduleType]
  | (string & {});

export const fulfillmentPickupDetailsScheduleTypeSchema: EnumSchema<FulfillmentPickupDetailsScheduleType> =
  s.enumOf<FulfillmentPickupDetailsScheduleType>(FulfillmentPickupDetailsScheduleType);
