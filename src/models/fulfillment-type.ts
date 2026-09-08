import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of fulfillment. */
export const FulfillmentType = {
  /** A recipient to pick up the fulfillment from a physical [location](entity:Location). */
  Pickup: "PICKUP",
  /** A shipping carrier to ship the fulfillment. */
  Shipment: "SHIPMENT",
  /** A courier to deliver the fulfillment. */
  Delivery: "DELIVERY",
  /**
   * A customer to receive the fulfillment within the seller's physical [location](entity:Location).
   */
  InStore: "IN_STORE",
} as const;
export type FulfillmentType = (typeof FulfillmentType)[keyof typeof FulfillmentType] | (string & {});

export const fulfillmentTypeSchema: EnumSchema<FulfillmentType> = s.enumOf<FulfillmentType>(FulfillmentType);
