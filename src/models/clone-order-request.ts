import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CloneOrderRequest = {
  orderId: string;
  version?: number;
  idempotencyKey?: string | null;
};

export const cloneOrderRequestSchema: Schema<CloneOrderRequest> = s.object<CloneOrderRequest>({
  orderId: s.string(),
  version: s.optional(s.number()),
  idempotencyKey: s.optionalNullable(s.string()),
  _keysMap: {
    orderId: "order_id",
    idempotencyKey: "idempotency_key",
  },
});
