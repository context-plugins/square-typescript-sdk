import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PublishInvoiceRequest = {
  version: number;
  idempotencyKey?: string | null;
};

export const publishInvoiceRequestSchema: Schema<PublishInvoiceRequest> = s.object<PublishInvoiceRequest>({
  version: s.number(),
  idempotencyKey: s.optionalNullable(s.string()),
  _keysMap: {
    idempotencyKey: "idempotency_key",
  },
});
