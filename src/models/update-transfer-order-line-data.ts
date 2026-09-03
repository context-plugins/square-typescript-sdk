import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateTransferOrderLineData = {
  uid?: string | null;
  itemVariationId?: string | null;
  quantityOrdered?: string | null;
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
