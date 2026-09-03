import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { acceptedPaymentMethodsSchema, type AcceptedPaymentMethods } from "./accepted-payment-methods.js";
import { customFieldSchema, type CustomField } from "./custom-field.js";
import { moneySchema, type Money } from "./money.js";
import { shippingFeeSchema, type ShippingFee } from "./shipping-fee.js";

export type CheckoutOptions = {
  allowTipping?: boolean | null;
  customFields?: CustomField[] | null;
  subscriptionPlanId?: string | null;
  redirectUrl?: string | null;
  merchantSupportEmail?: string | null;
  askForShippingAddress?: boolean | null;
  acceptedPaymentMethods?: AcceptedPaymentMethods;
  appFeeMoney?: Money;
  shippingFee?: ShippingFee;
  enableCoupon?: boolean | null;
  enableLoyalty?: boolean | null;
};

export const checkoutOptionsSchema: Schema<CheckoutOptions> = s.object<CheckoutOptions>({
  allowTipping: s.optionalNullable(s.boolean()),
  customFields: s.optionalNullable(s.array(s.lazy(() => customFieldSchema))),
  subscriptionPlanId: s.optionalNullable(s.string()),
  redirectUrl: s.optionalNullable(s.string()),
  merchantSupportEmail: s.optionalNullable(s.string()),
  askForShippingAddress: s.optionalNullable(s.boolean()),
  acceptedPaymentMethods: s.optional(s.lazy(() => acceptedPaymentMethodsSchema)),
  appFeeMoney: s.optional(s.lazy(() => moneySchema)),
  shippingFee: s.optional(s.lazy(() => shippingFeeSchema)),
  enableCoupon: s.optionalNullable(s.boolean()),
  enableLoyalty: s.optionalNullable(s.boolean()),
  _keysMap: {
    allowTipping: "allow_tipping",
    customFields: "custom_fields",
    subscriptionPlanId: "subscription_plan_id",
    redirectUrl: "redirect_url",
    merchantSupportEmail: "merchant_support_email",
    askForShippingAddress: "ask_for_shipping_address",
    acceptedPaymentMethods: "accepted_payment_methods",
    appFeeMoney: "app_fee_money",
    shippingFee: "shipping_fee",
    enableCoupon: "enable_coupon",
    enableLoyalty: "enable_loyalty",
  },
});
