import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceAutomaticPaymentSourceSchema,
  type InvoiceAutomaticPaymentSource,
} from "./invoice-automatic-payment-source.js";
import { invoicePaymentReminderSchema, type InvoicePaymentReminder } from "./invoice-payment-reminder.js";
import { invoiceRequestMethodSchema, type InvoiceRequestMethod } from "./invoice-request-method.js";
import { invoiceRequestTypeSchema, type InvoiceRequestType } from "./invoice-request-type.js";
import { moneySchema, type Money } from "./money.js";

export type InvoicePaymentRequest = {
  uid?: string | null;
  requestMethod?: InvoiceRequestMethod;
  requestType?: InvoiceRequestType;
  dueDate?: string | null;
  fixedAmountRequestedMoney?: Money;
  percentageRequested?: string | null;
  tippingEnabled?: boolean | null;
  automaticPaymentSource?: InvoiceAutomaticPaymentSource;
  cardId?: string | null;
  reminders?: InvoicePaymentReminder[] | null;
  computedAmountMoney?: Money;
  totalCompletedAmountMoney?: Money;
  roundingAdjustmentIncludedMoney?: Money;
};

export const invoicePaymentRequestSchema: Schema<InvoicePaymentRequest> = s.object<InvoicePaymentRequest>({
  uid: s.optionalNullable(s.string()),
  requestMethod: s.optional(s.lazy(() => invoiceRequestMethodSchema)),
  requestType: s.optional(s.lazy(() => invoiceRequestTypeSchema)),
  dueDate: s.optionalNullable(s.string()),
  fixedAmountRequestedMoney: s.optional(s.lazy(() => moneySchema)),
  percentageRequested: s.optionalNullable(s.string()),
  tippingEnabled: s.optionalNullable(s.boolean()),
  automaticPaymentSource: s.optional(s.lazy(() => invoiceAutomaticPaymentSourceSchema)),
  cardId: s.optionalNullable(s.string()),
  reminders: s.optionalNullable(s.array(s.lazy(() => invoicePaymentReminderSchema))),
  computedAmountMoney: s.optional(s.lazy(() => moneySchema)),
  totalCompletedAmountMoney: s.optional(s.lazy(() => moneySchema)),
  roundingAdjustmentIncludedMoney: s.optional(s.lazy(() => moneySchema)),
  _keysMap: {
    requestMethod: "request_method",
    requestType: "request_type",
    dueDate: "due_date",
    fixedAmountRequestedMoney: "fixed_amount_requested_money",
    percentageRequested: "percentage_requested",
    tippingEnabled: "tipping_enabled",
    automaticPaymentSource: "automatic_payment_source",
    cardId: "card_id",
    computedAmountMoney: "computed_amount_money",
    totalCompletedAmountMoney: "total_completed_amount_money",
    roundingAdjustmentIncludedMoney: "rounding_adjustment_included_money",
  },
});
