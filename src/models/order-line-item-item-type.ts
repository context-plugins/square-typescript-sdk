import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderLineItemItemType = {
  Item: "ITEM",
  CustomAmount: "CUSTOM_AMOUNT",
  GiftCard: "GIFT_CARD",
} as const;
export type OrderLineItemItemType =
  | (typeof OrderLineItemItemType)[keyof typeof OrderLineItemItemType]
  | (string & {});

export const orderLineItemItemTypeSchema: EnumSchema<OrderLineItemItemType> =
  s.enumOf<OrderLineItemItemType>(OrderLineItemItemType);
