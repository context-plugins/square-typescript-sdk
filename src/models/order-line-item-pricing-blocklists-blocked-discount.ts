import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A discount to block from applying to a line item. The discount must be identified by either
 * `discount_uid` or `discount_catalog_object_id`, but not both.
 */
export type OrderLineItemPricingBlocklistsBlockedDiscount = {
  /** A unique ID of the `BlockedDiscount` within the order. */
  uid?: string | null;
  /**
   * The `uid` of the discount that should be blocked. Use this field to block ad hoc discounts. For
   * catalog discounts, use the `discount_catalog_object_id` field.
   */
  discountUid?: string | null;
  /**
   * The `catalog_object_id` of the discount that should be blocked. Use this field to block catalog
   * discounts. For ad hoc discounts, use the `discount_uid` field.
   */
  discountCatalogObjectId?: string | null;
};

export const orderLineItemPricingBlocklistsBlockedDiscountSchema: Schema<OrderLineItemPricingBlocklistsBlockedDiscount> =
  s.object<OrderLineItemPricingBlocklistsBlockedDiscount>({
    uid: s.optionalNullable(s.string()),
    discountUid: s.optionalNullable(s.string()),
    discountCatalogObjectId: s.optionalNullable(s.string()),
    _keysMap: {
      discountUid: "discount_uid",
      discountCatalogObjectId: "discount_catalog_object_id",
    },
  });
