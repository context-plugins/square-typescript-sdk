import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeletePaymentLinkResponse = {
  errors?: Error[];
  /** The ID of the link that is deleted. */
  id?: string;
  /**
   * The ID of the order that is canceled. When a payment link is deleted, Square updates the the
   * `state` (of the order that the checkout link created) to CANCELED.
   */
  cancelledOrderId?: string;
};

export const deletePaymentLinkResponseSchema: Schema<DeletePaymentLinkResponse> =
  s.object<DeletePaymentLinkResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    id: s.optional(s.string()),
    cancelledOrderId: s.optional(s.string()),
    _keysMap: {
      cancelledOrderId: "cancelled_order_id",
    },
  });
