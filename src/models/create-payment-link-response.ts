import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  paymentLinkRelatedResourcesSchema,
  type PaymentLinkRelatedResources,
} from "./payment-link-related-resources.js";
import { paymentLinkSchema, type PaymentLink } from "./payment-link.js";

export type CreatePaymentLinkResponse = {
  errors?: Error[];
  paymentLink?: PaymentLink;
  relatedResources?: PaymentLinkRelatedResources;
};

export const createPaymentLinkResponseSchema: Schema<CreatePaymentLinkResponse> =
  s.object<CreatePaymentLinkResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    paymentLink: s.optional(s.lazy(() => paymentLinkSchema)),
    relatedResources: s.optional(s.lazy(() => paymentLinkRelatedResourcesSchema)),
    _keysMap: {
      paymentLink: "payment_link",
      relatedResources: "related_resources",
    },
  });
