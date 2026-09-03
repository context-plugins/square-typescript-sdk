import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceAcceptedPaymentMethodsSchema,
  type InvoiceAcceptedPaymentMethods,
} from "./invoice-accepted-payment-methods.js";
import { invoiceAttachmentSchema, type InvoiceAttachment } from "./invoice-attachment.js";
import { invoiceCustomFieldSchema, type InvoiceCustomField } from "./invoice-custom-field.js";
import { invoiceDeliveryMethodSchema, type InvoiceDeliveryMethod } from "./invoice-delivery-method.js";
import { invoicePaymentRequestSchema, type InvoicePaymentRequest } from "./invoice-payment-request.js";
import { invoiceRecipientSchema, type InvoiceRecipient } from "./invoice-recipient.js";
import { invoiceStatusSchema, type InvoiceStatus } from "./invoice-status.js";
import { moneySchema, type Money } from "./money.js";

export type Invoice = {
  id?: string;
  version?: number;
  locationId?: string | null;
  orderId?: string | null;
  primaryRecipient?: InvoiceRecipient;
  paymentRequests?: InvoicePaymentRequest[] | null;
  deliveryMethod?: InvoiceDeliveryMethod;
  invoiceNumber?: string | null;
  title?: string | null;
  description?: string | null;
  scheduledAt?: string | null;
  publicUrl?: string;
  nextPaymentAmountMoney?: Money;
  status?: InvoiceStatus;
  timezone?: string;
  createdAt?: string;
  updatedAt?: string;
  acceptedPaymentMethods?: InvoiceAcceptedPaymentMethods;
  customFields?: InvoiceCustomField[] | null;
  subscriptionId?: string;
  saleOrServiceDate?: string | null;
  paymentConditions?: string | null;
  storePaymentMethodEnabled?: boolean | null;
  attachments?: InvoiceAttachment[];
  creatorTeamMemberId?: string;
};

export const invoiceSchema: Schema<Invoice> = s.object<Invoice>({
  id: s.optional(s.string()),
  version: s.optional(s.number()),
  locationId: s.optionalNullable(s.string()),
  orderId: s.optionalNullable(s.string()),
  primaryRecipient: s.optional(s.lazy(() => invoiceRecipientSchema)),
  paymentRequests: s.optionalNullable(s.array(s.lazy(() => invoicePaymentRequestSchema))),
  deliveryMethod: s.optional(s.lazy(() => invoiceDeliveryMethodSchema)),
  invoiceNumber: s.optionalNullable(s.string()),
  title: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  scheduledAt: s.optionalNullable(s.string()),
  publicUrl: s.optional(s.string()),
  nextPaymentAmountMoney: s.optional(s.lazy(() => moneySchema)),
  status: s.optional(s.lazy(() => invoiceStatusSchema)),
  timezone: s.optional(s.string()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  acceptedPaymentMethods: s.optional(s.lazy(() => invoiceAcceptedPaymentMethodsSchema)),
  customFields: s.optionalNullable(s.array(s.lazy(() => invoiceCustomFieldSchema))),
  subscriptionId: s.optional(s.string()),
  saleOrServiceDate: s.optionalNullable(s.string()),
  paymentConditions: s.optionalNullable(s.string()),
  storePaymentMethodEnabled: s.optionalNullable(s.boolean()),
  attachments: s.optional(s.array(s.lazy(() => invoiceAttachmentSchema))),
  creatorTeamMemberId: s.optional(s.string()),
  _keysMap: {
    locationId: "location_id",
    orderId: "order_id",
    primaryRecipient: "primary_recipient",
    paymentRequests: "payment_requests",
    deliveryMethod: "delivery_method",
    invoiceNumber: "invoice_number",
    scheduledAt: "scheduled_at",
    publicUrl: "public_url",
    nextPaymentAmountMoney: "next_payment_amount_money",
    createdAt: "created_at",
    updatedAt: "updated_at",
    acceptedPaymentMethods: "accepted_payment_methods",
    customFields: "custom_fields",
    subscriptionId: "subscription_id",
    saleOrServiceDate: "sale_or_service_date",
    paymentConditions: "payment_conditions",
    storePaymentMethodEnabled: "store_payment_method_enabled",
    creatorTeamMemberId: "creator_team_member_id",
  },
});
