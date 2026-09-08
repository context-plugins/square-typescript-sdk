import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { paymentSchema, type Payment } from "./payment.js";

/** Defines the response returned by [ListPayments](api-endpoint:Payments-ListPayments). */
export type ListPaymentsResponse = {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /** The requested list of payments. */
  payments?: Payment[];
  /**
   * The pagination cursor to be used in a subsequent request. If empty, this is the final response.
   *
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
};

export const listPaymentsResponseSchema: Schema<ListPaymentsResponse> = s.object<ListPaymentsResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  payments: s.optional(s.array(s.lazy(() => paymentSchema))),
  cursor: s.optional(s.string()),
});
