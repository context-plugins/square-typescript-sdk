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

/**
 * Stores information about an invoice. You use the Invoices API to create and manage invoices. For
 * more information, see [Invoices API
 * Overview](https://developer.squareup.com/docs/invoices-api/overview).
 */
export type Invoice = {
  /** The Square-assigned ID of the invoice. */
  id?: string;
  /**
   * The Square-assigned version number, which is incremented each time an update is committed to
   * the invoice.
   */
  version?: number;
  /**
   * The ID of the location that this invoice is associated with.
   *
   * If specified in a `CreateInvoice` request, the value must match the `location_id` of the
   * associated order.
   */
  locationId?: string | null;
  /**
   * The ID of the [order](entity:Order) for which the invoice is created. This field is required
   * when creating an invoice, and the order must be in the `OPEN` state.
   *
   * To view the line items and other information for the associated order, call the
   * [RetrieveOrder](api-endpoint:Orders-RetrieveOrder) endpoint using the order ID.
   */
  orderId?: string | null;
  /**
   * Represents a snapshot of customer data. This object stores customer data that is displayed on
   * the invoice and that Square uses to deliver the invoice.
   *
   * When you provide a customer ID for a draft invoice, Square retrieves the associated customer
   * profile and populates the remaining `InvoiceRecipient` fields. You cannot update these fields
   * after the invoice is published. Square updates the customer ID in response to a merge
   * operation, but does not update other fields.
   */
  primaryRecipient?: InvoiceRecipient;
  /**
   * The payment schedule for the invoice, represented by one or more payment requests that define
   * payment settings, such as amount due and due date. An invoice supports the following payment
   * request combinations:
   * - One balance
   * - One deposit with one balance
   * - 2–12 installments
   * - One deposit with 2–12 installments
   *
   * This field is required when creating an invoice. It must contain at least one payment request.
   * All payment requests for the invoice must equal the total order amount. For more information,
   * see [Configuring payment
   * requests](https://developer.squareup.com/docs/invoices-api/create-publish-invoices#payment-requests).
   *
   * Adding `INSTALLMENT` payment requests to an invoice requires an [Invoices Plus
   * subscription](https://developer.squareup.com/docs/invoices-api/overview#invoices-plus-subscription).
   */
  paymentRequests?: InvoicePaymentRequest[] | null;
  /** Indicates how Square delivers the [invoice](entity:Invoice) to the customer. */
  deliveryMethod?: InvoiceDeliveryMethod;
  /**
   * A user-friendly invoice number that is displayed on the invoice. The value is unique within a
   * location. If not provided when creating an invoice, Square assigns a value. It increments from
   * 1 and is padded with zeros making it 7 characters long (for example, 0000001 and 0000002).
   */
  invoiceNumber?: string | null;
  /** The title of the invoice, which is displayed on the invoice. */
  title?: string | null;
  /** The description of the invoice, which is displayed on the invoice. */
  description?: string | null;
  /**
   * The timestamp when the invoice is scheduled for processing, in RFC 3339 format. After the
   * invoice is published, Square processes the invoice on the specified date, according to the
   * delivery method and payment request settings.
   *
   * If the field is not set, Square processes the invoice immediately after it is published.
   */
  scheduledAt?: string | null;
  /**
   * A temporary link to the Square-hosted payment page where the customer can pay the invoice. If
   * the link expires, customers can provide the email address or phone number associated with the
   * invoice and request a new link directly from the expired payment page.
   *
   * This field is added after the invoice is published and reaches the scheduled date (if one is
   * defined).
   */
  publicUrl?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  nextPaymentAmountMoney?: Money;
  /** Indicates the status of an [invoice](entity:Invoice). */
  status?: InvoiceStatus;
  /**
   * The time zone used to interpret calendar dates on the invoice, such as `due_date`. When an
   * invoice is created, this field is set to the `timezone` specified for the seller location. The
   * value cannot be changed.
   *
   * For example, a payment `due_date` of 2021-03-09 with a `timezone` of America/Los\_Angeles
   * becomes overdue at midnight on March 9 in America/Los\_Angeles (which equals a UTC timestamp of
   * 2021-03-10T08:00:00Z).
   */
  timezone?: string;
  /** The timestamp when the invoice was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp when the invoice was last updated, in RFC 3339 format. */
  updatedAt?: string;
  /**
   * The payment methods that customers can use to pay an [invoice](entity:Invoice) on the
   * Square-hosted invoice payment page.
   */
  acceptedPaymentMethods?: InvoiceAcceptedPaymentMethods;
  /**
   * Additional seller-defined fields that are displayed on the invoice. For more information, see
   * [Custom fields](https://developer.squareup.com/docs/invoices-api/overview#custom-fields).
   *
   * Adding custom fields to an invoice requires an [Invoices Plus
   * subscription](https://developer.squareup.com/docs/invoices-api/overview#invoices-plus-subscription).
   *
   * Max: 2 custom fields
   */
  customFields?: InvoiceCustomField[] | null;
  /**
   * The ID of the [subscription](entity:Subscription) associated with the invoice. This field is
   * present only on subscription billing invoices.
   */
  subscriptionId?: string;
  /**
   * The date of the sale or the date that the service is rendered, in `YYYY-MM-DD` format. This
   * field can be used to specify a past or future date which is displayed on the invoice.
   */
  saleOrServiceDate?: string | null;
  /**
   * **France only.** The payment terms and conditions that are displayed on the invoice. For more
   * information, see [Payment
   * conditions](https://developer.squareup.com/docs/invoices-api/overview#payment-conditions).
   *
   * For countries other than France, Square returns an `INVALID_REQUEST_ERROR` with a `BAD_REQUEST`
   * code and "Payment conditions are not supported for this location's country" detail if this
   * field is included in `CreateInvoice` or `UpdateInvoice` requests.
   */
  paymentConditions?: string | null;
  /**
   * Indicates whether to allow a customer to save a credit or debit card as a card on file or a
   * bank transfer as a bank account on file. If `true`, Square displays a __Save my card on file__
   * or __Save my bank on file__ checkbox on the invoice payment page. Stored payment information
   * can be used for future automatic payments. The default value is `false`.
   */
  storePaymentMethodEnabled?: boolean | null;
  /**
   * Metadata about the attachments on the invoice. Invoice attachments are managed using the
   * [CreateInvoiceAttachment](api-endpoint:Invoices-CreateInvoiceAttachment) and
   * [DeleteInvoiceAttachment](api-endpoint:Invoices-DeleteInvoiceAttachment) endpoints.
   */
  attachments?: InvoiceAttachment[];
  /**
   * The ID of the [team member](entity:TeamMember) who created the invoice. This field is present
   * only on invoices created in the Square Dashboard or Square Invoices app by a logged-in team
   * member.
   */
  creatorTeamMemberId?: string;
};

export const invoiceSchema: Schema<Invoice> = s.object<Invoice>({
  id: s.optional(s.string()),
  version: s.optional(s.int()),
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
