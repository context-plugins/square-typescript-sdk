import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferOrderGoodsReceiptLineItemSchema,
  type TransferOrderGoodsReceiptLineItem,
} from "./transfer-order-goods-receipt-line-item.js";

export type TransferOrderGoodsReceipt = {
  lineItems?: TransferOrderGoodsReceiptLineItem[] | null;
};

export const transferOrderGoodsReceiptSchema: Schema<TransferOrderGoodsReceipt> =
  s.object<TransferOrderGoodsReceipt>({
    lineItems: s.optionalNullable(s.array(s.lazy(() => transferOrderGoodsReceiptLineItemSchema))),
    _keysMap: {
      lineItems: "line_items",
    },
  });
