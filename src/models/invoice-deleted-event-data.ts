import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvoiceDeletedEventData = {
  /** Name of the affected object’s type, `"invoice"`. */
  type?: string | null;
  /** ID of the affected invoice. */
  id?: string;
  /** Indicates that the invoice was deleted. */
  deleted?: boolean | null;
};

export const invoiceDeletedEventDataSchema: Schema<InvoiceDeletedEventData> =
  s.object<InvoiceDeletedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    deleted: s.optionalNullable(s.boolean()),
  });
