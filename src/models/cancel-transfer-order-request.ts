import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CancelTransferOrderRequest = {
  idempotencyKey: string;
  version?: number;
};

export const cancelTransferOrderRequestSchema: Schema<CancelTransferOrderRequest> =
  s.object<CancelTransferOrderRequest>({
    idempotencyKey: s.string(),
    version: s.optional(s.number()),
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
