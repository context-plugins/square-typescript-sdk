import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request to cancel a transfer order, marking any unreceived quantities as canceled */
export type CancelTransferOrderRequest = {
  /**
   * A unique string that identifies this UpdateTransferOrder request. Keys can be any valid string
   * but must be unique for every UpdateTransferOrder request.
   */
  idempotencyKey: string;
  /** Version for optimistic concurrency */
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
