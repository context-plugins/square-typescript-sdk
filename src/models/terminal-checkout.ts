import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionCancelReasonSchema, type ActionCancelReason } from "./action-cancel-reason.js";
import {
  checkoutOptionsPaymentTypeSchema,
  type CheckoutOptionsPaymentType,
} from "./checkout-options-payment-type.js";
import { deviceCheckoutOptionsSchema, type DeviceCheckoutOptions } from "./device-checkout-options.js";
import { moneySchema, type Money } from "./money.js";
import { paymentOptionsSchema, type PaymentOptions } from "./payment-options.js";

export type TerminalCheckout = {
  id?: string;
  amountMoney: Money;
  referenceId?: string | null;
  note?: string | null;
  orderId?: string | null;
  paymentOptions?: PaymentOptions;
  deviceOptions: DeviceCheckoutOptions;
  deadlineDuration?: string | null;
  status?: string;
  cancelReason?: ActionCancelReason;
  paymentIds?: string[];
  createdAt?: string;
  updatedAt?: string;
  appId?: string;
  locationId?: string;
  paymentType?: CheckoutOptionsPaymentType;
  teamMemberId?: string | null;
  customerId?: string | null;
  appFeeMoney?: Money;
  statementDescriptionIdentifier?: string | null;
  tipMoney?: Money;
};

export const terminalCheckoutSchema: Schema<TerminalCheckout> = s.object<TerminalCheckout>({
  id: s.optional(s.string()),
  amountMoney: moneySchema,
  referenceId: s.optionalNullable(s.string()),
  note: s.optionalNullable(s.string()),
  orderId: s.optionalNullable(s.string()),
  paymentOptions: s.optional(s.lazy(() => paymentOptionsSchema)),
  deviceOptions: deviceCheckoutOptionsSchema,
  deadlineDuration: s.optionalNullable(s.string()),
  status: s.optional(s.string()),
  cancelReason: s.optional(s.lazy(() => actionCancelReasonSchema)),
  paymentIds: s.optional(s.array(s.string())),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  appId: s.optional(s.string()),
  locationId: s.optional(s.string()),
  paymentType: s.optional(s.lazy(() => checkoutOptionsPaymentTypeSchema)),
  teamMemberId: s.optionalNullable(s.string()),
  customerId: s.optionalNullable(s.string()),
  appFeeMoney: s.optional(s.lazy(() => moneySchema)),
  statementDescriptionIdentifier: s.optionalNullable(s.string()),
  tipMoney: s.optional(s.lazy(() => moneySchema)),
  _keysMap: {
    amountMoney: "amount_money",
    referenceId: "reference_id",
    orderId: "order_id",
    paymentOptions: "payment_options",
    deviceOptions: "device_options",
    deadlineDuration: "deadline_duration",
    cancelReason: "cancel_reason",
    paymentIds: "payment_ids",
    createdAt: "created_at",
    updatedAt: "updated_at",
    appId: "app_id",
    locationId: "location_id",
    paymentType: "payment_type",
    teamMemberId: "team_member_id",
    customerId: "customer_id",
    appFeeMoney: "app_fee_money",
    statementDescriptionIdentifier: "statement_description_identifier",
    tipMoney: "tip_money",
  },
});
