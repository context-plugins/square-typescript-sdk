import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Defines the fields that are included in requests to the [PayOrder](api-endpoint:Orders-PayOrder)
 * endpoint.
 */
export type PayOrderRequest = {
  /**
   * A value you specify that uniquely identifies this request among requests you have sent. If you
   * are unsure whether a particular payment request was completed successfully, you can reattempt
   * it with the same idempotency key without worrying about duplicate payments.
   *
   * For more information, see
   * [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).
   */
  idempotencyKey: string;
  /** The version of the order being paid. If not supplied, the latest version will be paid. */
  orderVersion?: number | null;
  /**
   * The IDs of the [payments](entity:Payment) to collect. The payment total must match the order
   * total.
   */
  paymentIds?: string[] | null;
};

export const payOrderRequestSchema: Schema<PayOrderRequest> = s.object<PayOrderRequest>({
  idempotencyKey: s.string(),
  orderVersion: s.optionalNullable(s.int()),
  paymentIds: s.optionalNullable(s.array(s.string())),
  _keysMap: {
    idempotencyKey: "idempotency_key",
    orderVersion: "order_version",
    paymentIds: "payment_ids",
  },
});
