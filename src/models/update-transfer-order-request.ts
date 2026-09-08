import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { updateTransferOrderDataSchema, type UpdateTransferOrderData } from "./update-transfer-order-data.js";

/** Request to update a transfer order */
export type UpdateTransferOrderRequest = {
  /**
   * A unique string that identifies this UpdateTransferOrder request. Keys must contain only
   * alphanumeric characters, dashes and underscores
   */
  idempotencyKey: string;
  /** Data model for updating a transfer order. All fields are optional. */
  transferOrder: UpdateTransferOrderData;
  /** Version for optimistic concurrency */
  version?: number;
};

export const updateTransferOrderRequestSchema: Schema<UpdateTransferOrderRequest> =
  s.object<UpdateTransferOrderRequest>({
    idempotencyKey: s.string(),
    transferOrder: updateTransferOrderDataSchema,
    version: s.optional(s.number()),
    _keysMap: {
      idempotencyKey: "idempotency_key",
      transferOrder: "transfer_order",
    },
  });
