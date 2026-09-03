import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferOrderGoodsReceiptLineItem = {
  transferOrderLineUid: string;
  quantityReceived?: string | null;
  quantityDamaged?: string | null;
  quantityCanceled?: string | null;
};

export const transferOrderGoodsReceiptLineItemSchema: Schema<TransferOrderGoodsReceiptLineItem> =
  s.object<TransferOrderGoodsReceiptLineItem>({
    transferOrderLineUid: s.string(),
    quantityReceived: s.optionalNullable(s.string()),
    quantityDamaged: s.optionalNullable(s.string()),
    quantityCanceled: s.optionalNullable(s.string()),
    _keysMap: {
      transferOrderLineUid: "transfer_order_line_uid",
      quantityReceived: "quantity_received",
      quantityDamaged: "quantity_damaged",
      quantityCanceled: "quantity_canceled",
    },
  });
