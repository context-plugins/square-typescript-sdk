import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  v1UpdateOrderRequestActionSchema,
  type V1UpdateOrderRequestAction,
} from "./v1-update-order-request-action.js";

/** V1UpdateOrderRequest */
export type V1UpdateOrderRequest = {
  action: V1UpdateOrderRequestAction;
  /**
   * The tracking number of the shipment associated with the order. Only valid if action is
   * COMPLETE.
   */
  shippedTrackingNumber?: string | null;
  /**
   * A merchant-specified note about the completion of the order. Only valid if action is COMPLETE.
   */
  completedNote?: string | null;
  /** A merchant-specified note about the refunding of the order. Only valid if action is REFUND. */
  refundedNote?: string | null;
  /** A merchant-specified note about the canceling of the order. Only valid if action is CANCEL. */
  canceledNote?: string | null;
};

export const v1UpdateOrderRequestSchema: Schema<V1UpdateOrderRequest> = s.object<V1UpdateOrderRequest>({
  action: v1UpdateOrderRequestActionSchema,
  shippedTrackingNumber: s.optionalNullable(s.string()),
  completedNote: s.optionalNullable(s.string()),
  refundedNote: s.optionalNullable(s.string()),
  canceledNote: s.optionalNullable(s.string()),
  _keysMap: {
    shippedTrackingNumber: "shipped_tracking_number",
    completedNote: "completed_note",
    refundedNote: "refunded_note",
    canceledNote: "canceled_note",
  },
});
