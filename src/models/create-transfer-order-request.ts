import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createTransferOrderDataSchema, type CreateTransferOrderData } from "./create-transfer-order-data.js";

export type CreateTransferOrderRequest = {
  idempotencyKey: string;
  transferOrder: CreateTransferOrderData;
};

export const createTransferOrderRequestSchema: Schema<CreateTransferOrderRequest> =
  s.object<CreateTransferOrderRequest>({
    idempotencyKey: s.string(),
    transferOrder: createTransferOrderDataSchema,
    _keysMap: {
      idempotencyKey: "idempotency_key",
      transferOrder: "transfer_order",
    },
  });
