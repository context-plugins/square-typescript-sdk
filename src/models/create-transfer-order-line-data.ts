import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Data for creating a new transfer order line item. Each line item specifies a
 * [CatalogItemVariation](entity:CatalogItemVariation) and quantity to transfer.
 */
export type CreateTransferOrderLineData = {
  /**
   * ID of the [CatalogItemVariation](entity:CatalogItemVariation) to transfer. Must reference a
   * valid item variation in the [Catalog](api:Catalog). The item variation must be:
   * - Active and available for sale
   * - Enabled for inventory tracking
   * - Available at the source location
   */
  itemVariationId: string;
  /** Total quantity ordered */
  quantityOrdered: string;
};

export const createTransferOrderLineDataSchema: Schema<CreateTransferOrderLineData> =
  s.object<CreateTransferOrderLineData>({
    itemVariationId: s.string(),
    quantityOrdered: s.string(),
    _keysMap: {
      itemVariationId: "item_variation_id",
      quantityOrdered: "quantity_ordered",
    },
  });
