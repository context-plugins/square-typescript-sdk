import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalRecipientSchema, type AdditionalRecipient } from "./additional-recipient.js";
import { addressSchema, type Address } from "./address.js";
import { orderSchema, type Order } from "./order.js";

export type Checkout = {
  id?: string;
  checkoutPageUrl?: string | null;
  askForShippingAddress?: boolean | null;
  merchantSupportEmail?: string | null;
  prePopulateBuyerEmail?: string | null;
  prePopulateShippingAddress?: Address;
  redirectUrl?: string | null;
  order?: Order;
  createdAt?: string;
  additionalRecipients?: AdditionalRecipient[] | null;
};

export const checkoutSchema: Schema<Checkout> = s.object<Checkout>({
  id: s.optional(s.string()),
  checkoutPageUrl: s.optionalNullable(s.string()),
  askForShippingAddress: s.optionalNullable(s.boolean()),
  merchantSupportEmail: s.optionalNullable(s.string()),
  prePopulateBuyerEmail: s.optionalNullable(s.string()),
  prePopulateShippingAddress: s.optional(s.lazy(() => addressSchema)),
  redirectUrl: s.optionalNullable(s.string()),
  order: s.optional(s.lazy(() => orderSchema)),
  createdAt: s.optional(s.string()),
  additionalRecipients: s.optionalNullable(s.array(s.lazy(() => additionalRecipientSchema))),
  _keysMap: {
    checkoutPageUrl: "checkout_page_url",
    askForShippingAddress: "ask_for_shipping_address",
    merchantSupportEmail: "merchant_support_email",
    prePopulateBuyerEmail: "pre_populate_buyer_email",
    prePopulateShippingAddress: "pre_populate_shipping_address",
    redirectUrl: "redirect_url",
    createdAt: "created_at",
    additionalRecipients: "additional_recipients",
  },
});
