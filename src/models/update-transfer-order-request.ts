import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { updateTransferOrderDataSchema, type UpdateTransferOrderData } from "./update-transfer-order-data.js";

export type UpdateTransferOrderRequest = {
  idempotencyKey: string;
  transferOrder: UpdateTransferOrderData;
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
