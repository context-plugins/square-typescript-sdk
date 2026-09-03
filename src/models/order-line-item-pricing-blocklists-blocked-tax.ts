import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OrderLineItemPricingBlocklistsBlockedTax = {
  uid?: string | null;
  taxUid?: string | null;
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
