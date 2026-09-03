import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  v1UpdateOrderRequestActionSchema,
  type V1UpdateOrderRequestAction,
} from "./v1-update-order-request-action.js";

export type V1UpdateOrderRequest = {
  action: V1UpdateOrderRequestAction;
  shippedTrackingNumber?: string | null;
  completedNote?: string | null;
  refundedNote?: string | null;
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
