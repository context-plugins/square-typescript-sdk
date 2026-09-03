import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferOrderGoodsReceiptSchema,
  type TransferOrderGoodsReceipt,
} from "./transfer-order-goods-receipt.js";

export type ReceiveTransferOrderRequest = {
  idempotencyKey: string;
  receipt: TransferOrderGoodsReceipt;
  version?: number;
};

export const receiveTransferOrderRequestSchema: Schema<ReceiveTransferOrderRequest> =
  s.object<ReceiveTransferOrderRequest>({
    idempotencyKey: s.string(),
    receipt: transferOrderGoodsReceiptSchema,
    version: s.optional(s.number()),
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
