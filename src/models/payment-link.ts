import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { checkoutOptionsSchema, type CheckoutOptions } from "./checkout-options.js";
import { prePopulatedDataSchema, type PrePopulatedData } from "./pre-populated-data.js";

export type PaymentLink = {
  /** The Square-assigned ID of the payment link. */
  id?: string;
  /**
   * The Square-assigned version number, which is incremented each time an update is committed to
   * the payment link.
   */
  version: number;
  /**
   * The optional description of the `payment_link` object. It is primarily for use by your
   * application and is not used anywhere.
   */
  description?: string | null;
  /** The ID of the order associated with the payment link. */
  orderId?: string;
  checkoutOptions?: CheckoutOptions;
  /**
   * Describes buyer data to prepopulate in the payment form. For more information, see [Optional
   * Checkout
   * Configurations](https://developer.squareup.com/docs/checkout-api/optional-checkout-configurations).
   */
  prePopulatedData?: PrePopulatedData;
  /** The shortened URL of the payment link. */
  url?: string;
  /** The long URL of the payment link. */
  longUrl?: string;
  /** The timestamp when the payment link was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp when the payment link was last updated, in RFC 3339 format. */
  updatedAt?: string;
  /**
   * An optional note. After Square processes the payment, this note is added to the resulting
   * `Payment`.
   */
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
