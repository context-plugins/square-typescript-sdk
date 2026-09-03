import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StartTransferOrderRequest = {
  idempotencyKey: string;
  version?: number;
};

export const startTransferOrderRequestSchema: Schema<StartTransferOrderRequest> =
  s.object<StartTransferOrderRequest>({
    idempotencyKey: s.string(),
    version: s.optional(s.number()),
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
