import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Represents the line item type. */
export const OrderLineItemItemType = {
  /** Indicates that the line item is an itemized sale. */
  Item: "ITEM",
  /** Indicates that the line item is a non-itemized sale. */
  CustomAmount: "CUSTOM_AMOUNT",
  /**
   * Indicates that the line item is a gift card sale. Gift cards sold through the Orders API are
   * sold in an unactivated state and can be activated through the Gift Cards API using the line
   * item `uid`.
   */
  GiftCard: "GIFT_CARD",
} as const;
export type OrderLineItemItemType =
  | (typeof OrderLineItemItemType)[keyof typeof OrderLineItemItemType]
  | (string & {});

export const orderLineItemItemTypeSchema: EnumSchema<OrderLineItemItemType> =
  s.enumOf<OrderLineItemItemType>(OrderLineItemItemType);
