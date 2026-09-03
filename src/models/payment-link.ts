import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { checkoutOptionsSchema, type CheckoutOptions } from "./checkout-options.js";
import { prePopulatedDataSchema, type PrePopulatedData } from "./pre-populated-data.js";

export type PaymentLink = {
  id?: string;
  version: number;
  description?: string | null;
  orderId?: string;
  checkoutOptions?: CheckoutOptions;
  prePopulatedData?: PrePopulatedData;
  url?: string;
  longUrl?: string;
  createdAt?: string;
  updatedAt?: string;
  paymentNote?: string | null;
};

export const paymentLinkSchema: Schema<PaymentLink> = s.object<PaymentLink>({
  id: s.optional(s.string()),
  version: s.number(),
  description: s.optionalNullable(s.string()),
  orderId: s.optional(s.string()),
  checkoutOptions: s.optional(s.lazy(() => checkoutOptionsSchema)),
  prePopulatedData: s.optional(s.lazy(() => prePopulatedDataSchema)),
  url: s.optional(s.string()),
  longUrl: s.optional(s.string()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  paymentNote: s.optionalNullable(s.string()),
  _keysMap: {
    orderId: "order_id",
    checkoutOptions: "checkout_options",
    prePopulatedData: "pre_populated_data",
    longUrl: "long_url",
    createdAt: "created_at",
    updatedAt: "updated_at",
    paymentNote: "payment_note",
  },
});
