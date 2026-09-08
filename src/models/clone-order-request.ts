import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Defines the fields that are included in requests to the
 * [CloneOrder](api-endpoint:Orders-CloneOrder) endpoint.
 */
export type CloneOrderRequest = {
  /** The ID of the order to clone. */
  orderId: string;
  /**
   * An optional order version for concurrency protection.
   *
   * If a version is provided, it must match the latest stored version of the order to clone. If a
   * version is not provided, the API clones the latest version.
   */
  version?: number;
  /**
   * A value you specify that uniquely identifies this clone request.
   *
   * If you are unsure whether a particular order was cloned successfully, you can reattempt the
   * call with the same idempotency key without worrying about creating duplicate cloned orders. The
   * originally cloned order is returned.
   *
   * For more information, see
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
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
