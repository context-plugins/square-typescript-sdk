import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { checkoutOptionsSchema, type CheckoutOptions } from "./checkout-options.js";
import { orderSchema, type Order } from "./order.js";
import { prePopulatedDataSchema, type PrePopulatedData } from "./pre-populated-data.js";
import { quickPaySchema, type QuickPay } from "./quick-pay.js";

export type CreatePaymentLinkRequest = {
  idempotencyKey?: string;
  description?: string;
  quickPay?: QuickPay;
  order?: Order;
  checkoutOptions?: CheckoutOptions;
  prePopulatedData?: PrePopulatedData;
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
