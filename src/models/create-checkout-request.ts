import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import {
  chargeRequestAdditionalRecipientSchema,
  type ChargeRequestAdditionalRecipient,
} from "./charge-request-additional-recipient.js";
import { createOrderRequestSchema, type CreateOrderRequest } from "./create-order-request.js";

export type CreateCheckoutRequest = {
  idempotencyKey: string;
  order: CreateOrderRequest;
  askForShippingAddress?: boolean;
  merchantSupportEmail?: string;
  prePopulateBuyerEmail?: string;
  prePopulateShippingAddress?: Address;
  redirectUrl?: string;
  additionalRecipients?: ChargeRequestAdditionalRecipient[];
  note?: string;
};

export const createCheckoutRequestSchema: Schema<CreateCheckoutRequest> = s.object<CreateCheckoutRequest>({
  idempotencyKey: s.string(),
  order: createOrderRequestSchema,
  askForShippingAddress: s.optional(s.boolean()),
  merchantSupportEmail: s.optional(s.string()),
  prePopulateBuyerEmail: s.optional(s.string()),
  prePopulateShippingAddress: s.optional(s.lazy(() => addressSchema)),
  redirectUrl: s.optional(s.string()),
  additionalRecipients: s.optional(s.array(s.lazy(() => chargeRequestAdditionalRecipientSchema))),
  note: s.optional(s.string()),
  _keysMap: {
    idempotencyKey: "idempotency_key",
    askForShippingAddress: "ask_for_shipping_address",
    merchantSupportEmail: "merchant_support_email",
    prePopulateBuyerEmail: "pre_populate_buyer_email",
    prePopulateShippingAddress: "pre_populate_shipping_address",
    redirectUrl: "redirect_url",
    additionalRecipients: "additional_recipients",
  },
});
