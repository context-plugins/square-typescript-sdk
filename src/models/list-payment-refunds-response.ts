import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { paymentRefundSchema, type PaymentRefund } from "./payment-refund.js";

/**
 * Defines the response returned by [ListPaymentRefunds](api-endpoint:Refunds-ListPaymentRefunds).
 *
 * Either `errors` or `refunds` is present in a given response (never both).
 */
export type ListPaymentRefundsResponse = {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /** The list of requested refunds. */
  refunds?: PaymentRefund[];
  /**
   * The pagination cursor to be used in a subsequent request. If empty, this is the final response.
   *
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
};

export const listPaymentRefundsResponseSchema: Schema<ListPaymentRefundsResponse> =
  s.object<ListPaymentRefundsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    refunds: s.optional(s.array(s.lazy(() => paymentRefundSchema))),
    cursor: s.optional(s.string()),
  });
