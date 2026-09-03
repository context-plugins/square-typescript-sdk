import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OrderLineItemPricingBlocklistsBlockedDiscount = {
  uid?: string | null;
  discountUid?: string | null;
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
