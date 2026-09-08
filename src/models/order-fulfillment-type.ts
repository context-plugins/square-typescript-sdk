import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of fulfillment. */
export const OrderFulfillmentType = {
  /** A recipient to pick up the fulfillment from a physical [location](entity:Location). */
  Pickup: "PICKUP",
  /** A shipping carrier to ship the fulfillment. */
  Shipment: "SHIPMENT",
  /** A courier to deliver the fulfillment. */
  Delivery: "DELIVERY",
} as const;
export type OrderFulfillmentType =
  | (typeof OrderFulfillmentType)[keyof typeof OrderFulfillmentType]
  | (string & {});

export const orderFulfillmentTypeSchema: EnumSchema<OrderFulfillmentType> =
  s.enumOf<OrderFulfillmentType>(OrderFulfillmentType);
