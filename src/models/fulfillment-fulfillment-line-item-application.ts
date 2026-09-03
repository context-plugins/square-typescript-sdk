import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FulfillmentFulfillmentLineItemApplication = {
  All: "ALL",
  EntryList: "ENTRY_LIST",
} as const;
export type FulfillmentFulfillmentLineItemApplication =
  | (typeof FulfillmentFulfillmentLineItemApplication)[keyof typeof FulfillmentFulfillmentLineItemApplication]
  | (string & {});

export const fulfillmentFulfillmentLineItemApplicationSchema: EnumSchema<FulfillmentFulfillmentLineItemApplication> =
  s.enumOf<FulfillmentFulfillmentLineItemApplication>(FulfillmentFulfillmentLineItemApplication);
