import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates where to render a custom field on the Square-hosted invoice page and in emailed or PDF
 * copies of the invoice.
 */
export const InvoiceCustomFieldPlacement = {
  /** Render the custom field above the invoice line items. */
  AboveLineItems: "ABOVE_LINE_ITEMS",
  /** Render the custom field below the invoice line items. */
  BelowLineItems: "BELOW_LINE_ITEMS",
} as const;
export type InvoiceCustomFieldPlacement =
  | (typeof InvoiceCustomFieldPlacement)[keyof typeof InvoiceCustomFieldPlacement]
  | (string & {});

export const invoiceCustomFieldPlacementSchema: EnumSchema<InvoiceCustomFieldPlacement> =
  s.enumOf<InvoiceCustomFieldPlacement>(InvoiceCustomFieldPlacement);
