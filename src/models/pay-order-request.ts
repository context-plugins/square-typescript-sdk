import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayOrderRequest = {
  idempotencyKey: string;
  orderVersion?: number | null;
  paymentIds?: string[] | null;
};

export const payOrderRequestSchema: Schema<PayOrderRequest> = s.object<PayOrderRequest>({
  idempotencyKey: s.string(),
  orderVersion: s.optionalNullable(s.number()),
  paymentIds: s.optionalNullable(s.array(s.string())),
  _keysMap: {
    idempotencyKey: "idempotency_key",
    orderVersion: "order_version",
    paymentIds: "payment_ids",
  },
});
