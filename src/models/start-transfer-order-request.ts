import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request to start a transfer order, changing its status from DRAFT to STARTED. */
export type StartTransferOrderRequest = {
  /**
   * A unique string that identifies this UpdateTransferOrder request. Keys can be any valid string
   * but must be unique for every UpdateTransferOrder request.
   */
  idempotencyKey: string;
  /** Version for optimistic concurrency */
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
