import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderFulfillmentFulfillmentLineItemApplication = {
  All: "ALL",
  EntryList: "ENTRY_LIST",
} as const;
export type OrderFulfillmentFulfillmentLineItemApplication =
  | (typeof OrderFulfillmentFulfillmentLineItemApplication)[keyof typeof OrderFulfillmentFulfillmentLineItemApplication]
  | (string & {});

export const orderFulfillmentFulfillmentLineItemApplicationSchema: EnumSchema<OrderFulfillmentFulfillmentLineItemApplication> =
  s.enumOf<OrderFulfillmentFulfillmentLineItemApplication>(OrderFulfillmentFulfillmentLineItemApplication);
