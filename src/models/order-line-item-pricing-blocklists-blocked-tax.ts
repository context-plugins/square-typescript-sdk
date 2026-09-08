import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A tax to block from applying to a line item. The tax must be identified by either `tax_uid` or
 * `tax_catalog_object_id`, but not both.
 */
export type OrderLineItemPricingBlocklistsBlockedTax = {
  /** A unique ID of the `BlockedTax` within the order. */
  uid?: string | null;
  /**
   * The `uid` of the tax that should be blocked. Use this field to block ad hoc taxes. For catalog,
   * taxes use the `tax_catalog_object_id` field.
   */
  taxUid?: string | null;
  /**
   * The `catalog_object_id` of the tax that should be blocked. Use this field to block catalog
   * taxes. For ad hoc taxes, use the `tax_uid` field.
   */
  taxCatalogObjectId?: string | null;
};

export const orderLineItemPricingBlocklistsBlockedTaxSchema: Schema<OrderLineItemPricingBlocklistsBlockedTax> =
  s.object<OrderLineItemPricingBlocklistsBlockedTax>({
    uid: s.optionalNullable(s.string()),
    taxUid: s.optionalNullable(s.string()),
    taxCatalogObjectId: s.optionalNullable(s.string()),
    _keysMap: {
      taxUid: "tax_uid",
      taxCatalogObjectId: "tax_catalog_object_id",
    },
  });
