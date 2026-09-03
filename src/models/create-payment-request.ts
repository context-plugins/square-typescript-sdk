import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { cashPaymentDetailsSchema, type CashPaymentDetails } from "./cash-payment-details.js";
import { customerDetailsSchema, type CustomerDetails } from "./customer-details.js";
import { externalPaymentDetailsSchema, type ExternalPaymentDetails } from "./external-payment-details.js";
import { moneySchema, type Money } from "./money.js";
import { offlinePaymentDetailsSchema, type OfflinePaymentDetails } from "./offline-payment-details.js";

export type CreatePaymentRequest = {
  sourceId: string;
  idempotencyKey: string;
  amountMoney?: Money;
  tipMoney?: Money;
  appFeeMoney?: Money;
  delayDuration?: string;
  delayAction?: string;
  autocomplete?: boolean;
  orderId?: string;
  customerId?: string;
  locationId?: string;
  teamMemberId?: string;
  referenceId?: string;
  verificationToken?: string;
  acceptPartialAuthorization?: boolean;
  buyerEmailAddress?: string;
  buyerPhoneNumber?: string;
  billingAddress?: Address;
  shippingAddress?: Address;
  note?: string;
  statementDescriptionIdentifier?: string;
  cashDetails?: CashPaymentDetails;
  externalDetails?: ExternalPaymentDetails;
  customerDetails?: CustomerDetails;
  offlinePaymentDetails?: OfflinePaymentDetails;
};

export const createPaymentRequestSchema: Schema<CreatePaymentRequest> = s.object<CreatePaymentRequest>({
  sourceId: s.string(),
  idempotencyKey: s.string(),
  amountMoney: s.optional(s.lazy(() => moneySchema)),
  tipMoney: s.optional(s.lazy(() => moneySchema)),
  appFeeMoney: s.optional(s.lazy(() => moneySchema)),
  delayDuration: s.optional(s.string()),
  delayAction: s.optional(s.string()),
  autocomplete: s.optional(s.boolean()),
  orderId: s.optional(s.string()),
  customerId: s.optional(s.string()),
  locationId: s.optional(s.string()),
  teamMemberId: s.optional(s.string()),
  referenceId: s.optional(s.string()),
  verificationToken: s.optional(s.string()),
  acceptPartialAuthorization: s.optional(s.boolean()),
  buyerEmailAddress: s.optional(s.string()),
  buyerPhoneNumber: s.optional(s.string()),
  billingAddress: s.optional(s.lazy(() => addressSchema)),
  shippingAddress: s.optional(s.lazy(() => addressSchema)),
  note: s.optional(s.string()),
  statementDescriptionIdentifier: s.optional(s.string()),
  cashDetails: s.optional(s.lazy(() => cashPaymentDetailsSchema)),
  externalDetails: s.optional(s.lazy(() => externalPaymentDetailsSchema)),
  customerDetails: s.optional(s.lazy(() => customerDetailsSchema)),
  offlinePaymentDetails: s.optional(s.lazy(() => offlinePaymentDetailsSchema)),
  _keysMap: {
    sourceId: "source_id",
    idempotencyKey: "idempotency_key",
    amountMoney: "amount_money",
    tipMoney: "tip_money",
    appFeeMoney: "app_fee_money",
    delayDuration: "delay_duration",
    delayAction: "delay_action",
    orderId: "order_id",
    customerId: "customer_id",
    locationId: "location_id",
    teamMemberId: "team_member_id",
    referenceId: "reference_id",
    verificationToken: "verification_token",
    acceptPartialAuthorization: "accept_partial_authorization",
    buyerEmailAddress: "buyer_email_address",
    buyerPhoneNumber: "buyer_phone_number",
    billingAddress: "billing_address",
    shippingAddress: "shipping_address",
    statementDescriptionIdentifier: "statement_description_identifier",
    cashDetails: "cash_details",
    externalDetails: "external_details",
    customerDetails: "customer_details",
    offlinePaymentDetails: "offline_payment_details",
  },
});
