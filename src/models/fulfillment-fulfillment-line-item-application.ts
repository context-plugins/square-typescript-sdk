import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The `line_item_application` describes what order line items this fulfillment applies to. It can
 * be `ALL` or `ENTRY_LIST` with a supplied list of fulfillment entries.
 */
export const FulfillmentFulfillmentLineItemApplication = {
  /** If `ALL`, `entries` must be unset. */
  All: "ALL",
  /** If `ENTRY_LIST`, supply a list of `entries`. */
  EntryList: "ENTRY_LIST",
} as const;
export type FulfillmentFulfillmentLineItemApplication =
  | (typeof FulfillmentFulfillmentLineItemApplication)[keyof typeof FulfillmentFulfillmentLineItemApplication]
  | (string & {});

export const fulfillmentFulfillmentLineItemApplicationSchema: EnumSchema<FulfillmentFulfillmentLineItemApplication> =
  s.enumOf<FulfillmentFulfillmentLineItemApplication>(FulfillmentFulfillmentLineItemApplication);
