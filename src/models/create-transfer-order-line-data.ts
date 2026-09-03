import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateTransferOrderLineData = {
  itemVariationId: string;
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
