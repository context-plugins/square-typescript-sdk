import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceCustomFieldPlacementSchema,
  type InvoiceCustomFieldPlacement,
} from "./invoice-custom-field-placement.js";

export type InvoiceCustomField = {
  label?: string | null;
  value?: string | null;
  placement?: InvoiceCustomFieldPlacement;
};

export const invoiceCustomFieldSchema: Schema<InvoiceCustomField> = s.object<InvoiceCustomField>({
  label: s.optionalNullable(s.string()),
  value: s.optionalNullable(s.string()),
  placement: s.optional(s.lazy(() => invoiceCustomFieldPlacementSchema)),
});
