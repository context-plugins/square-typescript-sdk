import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderFulfillmentType = {
  Pickup: "PICKUP",
  Shipment: "SHIPMENT",
  Delivery: "DELIVERY",
} as const;
export type OrderFulfillmentType =
  | (typeof OrderFulfillmentType)[keyof typeof OrderFulfillmentType]
  | (string & {});

export const orderFulfillmentTypeSchema: EnumSchema<OrderFulfillmentType> =
  s.enumOf<OrderFulfillmentType>(OrderFulfillmentType);
