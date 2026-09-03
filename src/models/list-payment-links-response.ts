import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { paymentLinkSchema, type PaymentLink } from "./payment-link.js";

export type ListPaymentLinksResponse = {
  errors?: Error[];
  paymentLinks?: PaymentLink[];
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
