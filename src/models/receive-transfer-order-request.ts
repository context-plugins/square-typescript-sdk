import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferOrderGoodsReceiptSchema,
  type TransferOrderGoodsReceipt,
} from "./transfer-order-goods-receipt.js";

/** Request to record receipt of items for a transfer order */
export type ReceiveTransferOrderRequest = {
  /** A unique key to make this request idempotent */
  idempotencyKey: string;
  /**
   * The goods receipt details for a transfer order. This object represents a single receipt of
   * goods against a transfer order, tracking:
   *
   * - Which [CatalogItemVariation](entity:CatalogItemVariation)s were received
   * - Quantities received in good condition
   * - Quantities damaged during transit/handling
   * - Quantities canceled during receipt
   *
   * Multiple goods receipts can be created for a single transfer order to handle:
   * - Partial deliveries
   * - Multiple shipments
   * - Split receipts across different dates
   * - Cancellations of specific quantities
   *
   * Each receipt automatically:
   * - Updates the transfer order status
   * - Adjusts received quantities
   * - Updates inventory levels at both source and destination [Location](entity:Location)s
   */
  receipt: TransferOrderGoodsReceipt;
  /** Version for optimistic concurrency */
  version?: number;
};

export const receiveTransferOrderRequestSchema: Schema<ReceiveTransferOrderRequest> =
  s.object<ReceiveTransferOrderRequest>({
    idempotencyKey: s.string(),
    receipt: transferOrderGoodsReceiptSchema,
    version: s.optional(s.int()),
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
