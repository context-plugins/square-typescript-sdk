import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { checkoutOptionsSchema, type CheckoutOptions } from "./checkout-options.js";
import { orderSchema, type Order } from "./order.js";
import { prePopulatedDataSchema, type PrePopulatedData } from "./pre-populated-data.js";
import { quickPaySchema, type QuickPay } from "./quick-pay.js";

export type CreatePaymentLinkRequest = {
  /**
   * A unique string that identifies this `CreatePaymentLinkRequest` request. If you do not provide
   * a unique string (or provide an empty string as the value), the endpoint treats each request as
   * independent.
   *
   * For more information, see
   * [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).
   */
  idempotencyKey?: string;
  /**
   * A description of the payment link. You provide this optional description that is useful in your
   * application context. It is not used anywhere.
   */
  description?: string;
  /**
   * Describes an ad hoc item and price to generate a quick pay checkout link. For more information,
   * see [Quick Pay Checkout](https://developer.squareup.com/docs/checkout-api/quick-pay-checkout).
   */
  quickPay?: QuickPay;
  /**
   * Contains all information related to a single order to process with Square, including line items
   * that specify the products to purchase. `Order` objects also include information about any
   * associated tenders, refunds, and returns.
   *
   * All Connect V2 Transactions have all been converted to Orders including all associated
   * itemization data.
   */
  order?: Order;
  checkoutOptions?: CheckoutOptions;
  /**
   * Describes buyer data to prepopulate in the payment form. For more information, see [Optional
   * Checkout
   * Configurations](https://developer.squareup.com/docs/checkout-api/optional-checkout-configurations).
   */
  prePopulatedData?: PrePopulatedData;
  /**
   * A note for the payment. After processing the payment, Square adds this note to the resulting
   * `Payment`.
   */
  paymentNote?: string;
};

export const createPaymentLinkRequestSchema: Schema<CreatePaymentLinkRequest> =
  s.object<CreatePaymentLinkRequest>({
    idempotencyKey: s.optional(s.string()),
    description: s.optional(s.string()),
    quickPay: s.optional(s.lazy(() => quickPaySchema)),
    order: s.optional(s.lazy(() => orderSchema)),
    checkoutOptions: s.optional(s.lazy(() => checkoutOptionsSchema)),
    prePopulatedData: s.optional(s.lazy(() => prePopulatedDataSchema)),
    paymentNote: s.optional(s.string()),
    _keysMap: {
      idempotencyKey: "idempotency_key",
      quickPay: "quick_pay",
      checkoutOptions: "checkout_options",
      prePopulatedData: "pre_populated_data",
      paymentNote: "payment_note",
    },
  });
