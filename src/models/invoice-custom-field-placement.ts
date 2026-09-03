import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoiceCustomFieldPlacement = {
  AboveLineItems: "ABOVE_LINE_ITEMS",
  BelowLineItems: "BELOW_LINE_ITEMS",
} as const;
export type InvoiceCustomFieldPlacement =
  | (typeof InvoiceCustomFieldPlacement)[keyof typeof InvoiceCustomFieldPlacement]
  | (string & {});

export const invoiceCustomFieldPlacementSchema: EnumSchema<InvoiceCustomFieldPlacement> =
  s.enumOf<InvoiceCustomFieldPlacement>(InvoiceCustomFieldPlacement);
