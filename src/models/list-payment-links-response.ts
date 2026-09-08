import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { paymentLinkSchema, type PaymentLink } from "./payment-link.js";

export type ListPaymentLinksResponse = {
  /** Errors that occurred during the request. */
  errors?: Error[];
  /** The list of payment links. */
  paymentLinks?: PaymentLink[];
  /**
   * When a response is truncated, it includes a cursor that you can use in a subsequent request to
   * retrieve the next set of gift cards. If a cursor is not present, this is the final response.
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
};

export const listPaymentLinksResponseSchema: Schema<ListPaymentLinksResponse> =
  s.object<ListPaymentLinksResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    paymentLinks: s.optional(s.array(s.lazy(() => paymentLinkSchema))),
    cursor: s.optional(s.string()),
    _keysMap: {
      paymentLinks: "payment_links",
    },
  });
