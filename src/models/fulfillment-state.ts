import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FulfillmentState = {
  Proposed: "PROPOSED",
  Reserved: "RESERVED",
  Prepared: "PREPARED",
  Completed: "COMPLETED",
  Canceled: "CANCELED",
  Failed: "FAILED",
} as const;
export type FulfillmentState = (typeof FulfillmentState)[keyof typeof FulfillmentState] | (string & {});

export const fulfillmentStateSchema: EnumSchema<FulfillmentState> =
  s.enumOf<FulfillmentState>(FulfillmentState);
