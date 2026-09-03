import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { paymentLinkSchema, type PaymentLink } from "./payment-link.js";

export type RetrievePaymentLinkResponse = {
  errors?: Error[];
  paymentLink?: PaymentLink;
};

export const retrievePaymentLinkResponseSchema: Schema<RetrievePaymentLinkResponse> =
  s.object<RetrievePaymentLinkResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    paymentLink: s.optional(s.lazy(() => paymentLinkSchema)),
    _keysMap: {
      paymentLink: "payment_link",
    },
  });
