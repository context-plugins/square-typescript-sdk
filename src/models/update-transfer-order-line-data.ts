import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents a line item update in a transfer order */
export type UpdateTransferOrderLineData = {
  /**
   * Line item id being updated. Required for updating/removing existing line items, but should not
   * be set for new line items.
   */
  uid?: string | null;
  /**
   * Catalog item variation being transferred
   *
   * Required for new line items, but otherwise is not updatable.
   */
  itemVariationId?: string | null;
  /** Total quantity ordered */
  quantityOrdered?: string | null;
  /** Flag to remove the line item during update. Must include `uid` in removal request */
  remove?: boolean | null;
};

export const updateTransferOrderLineDataSchema: Schema<UpdateTransferOrderLineData> =
  s.object<UpdateTransferOrderLineData>({
    uid: s.optionalNullable(s.string()),
    itemVariationId: s.optionalNullable(s.string()),
    quantityOrdered: s.optionalNullable(s.string()),
    remove: s.optionalNullable(s.boolean()),
    _keysMap: {
      itemVariationId: "item_variation_id",
      quantityOrdered: "quantity_ordered",
    },
  });
