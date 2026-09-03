import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CancelInvoiceRequest = {
  version: number;
};

export const cancelInvoiceRequestSchema: Schema<CancelInvoiceRequest> = s.object<CancelInvoiceRequest>({
  version: s.number(),
});
