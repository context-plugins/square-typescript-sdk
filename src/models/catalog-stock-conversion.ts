import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogStockConversion = {
  stockableItemVariationId: string;
  stockableQuantity: string;
  nonstockableQuantity: string;
};

export const catalogStockConversionSchema: Schema<CatalogStockConversion> = s.object<CatalogStockConversion>({
  stockableItemVariationId: s.string(),
  stockableQuantity: s.string(),
  nonstockableQuantity: s.string(),
  _keysMap: {
    stockableItemVariationId: "stockable_item_variation_id",
    stockableQuantity: "stockable_quantity",
    nonstockableQuantity: "nonstockable_quantity",
  },
});
