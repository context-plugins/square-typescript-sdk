import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferOrderLine = {
  uid?: string;
  itemVariationId: string;
  quantityOrdered: string;
  quantityPending?: string;
  quantityReceived?: string;
  quantityDamaged?: string;
  quantityCanceled?: string;
};

export const transferOrderLineSchema: Schema<TransferOrderLine> = s.object<TransferOrderLine>({
  uid: s.optional(s.string()),
  itemVariationId: s.string(),
  quantityOrdered: s.string(),
  quantityPending: s.optional(s.string()),
  quantityReceived: s.optional(s.string()),
  quantityDamaged: s.optional(s.string()),
  quantityCanceled: s.optional(s.string()),
  _keysMap: {
    itemVariationId: "item_variation_id",
    quantityOrdered: "quantity_ordered",
    quantityPending: "quantity_pending",
    quantityReceived: "quantity_received",
    quantityDamaged: "quantity_damaged",
    quantityCanceled: "quantity_canceled",
  },
});
