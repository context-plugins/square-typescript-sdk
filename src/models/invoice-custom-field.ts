import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceCustomFieldPlacementSchema,
  type InvoiceCustomFieldPlacement,
} from "./invoice-custom-field-placement.js";

/**
 * An additional seller-defined and customer-facing field to include on the invoice. For more
 * information, see [Custom
 * fields](https://developer.squareup.com/docs/invoices-api/overview#custom-fields).
 *
 * Adding custom fields to an invoice requires an [Invoices Plus
 * subscription](https://developer.squareup.com/docs/invoices-api/overview#invoices-plus-subscription).
 */
export type InvoiceCustomField = {
  /** The label or title of the custom field. This field is required for a custom field. */
  label?: string | null;
  /** The text of the custom field. If omitted, only the label is rendered. */
  value?: string | null;
  /**
   * Indicates where to render a custom field on the Square-hosted invoice page and in emailed or
   * PDF copies of the invoice.
   */
  placement?: InvoiceCustomFieldPlacement;
};

export const invoiceCustomFieldSchema: Schema<InvoiceCustomField> = s.object<InvoiceCustomField>({
  label: s.optionalNullable(s.string()),
  value: s.optionalNullable(s.string()),
  placement: s.optional(s.lazy(() => invoiceCustomFieldPlacementSchema)),
});
