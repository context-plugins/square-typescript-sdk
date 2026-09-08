import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Describes a request to complete (capture) a payment using
 * [CompletePayment](api-endpoint:Payments-CompletePayment).
 *
 * By default, payments are set to `autocomplete` immediately after they are created. To complete
 * payments manually, set `autocomplete` to `false`.
 */
export type CompletePaymentRequest = {
  /**
   * Used for optimistic concurrency. This opaque token identifies the current `Payment` version
   * that the caller expects. If the server has a different version of the Payment, the update fails
   * and a response with a VERSION_MISMATCH error is returned.
   */
  versionToken?: string | null;
};

export const completePaymentRequestSchema: Schema<CompletePaymentRequest> = s.object<CompletePaymentRequest>({
  versionToken: s.optionalNullable(s.string()),
  _keysMap: {
    versionToken: "version_token",
  },
});
