import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateBankAccountRequest = {
  idempotencyKey: string;
  sourceId: string;
  customerId?: string;
};

export const createBankAccountRequestSchema: Schema<CreateBankAccountRequest> =
  s.object<CreateBankAccountRequest>({
    idempotencyKey: s.string(),
    sourceId: s.string(),
    customerId: s.optional(s.string()),
    _keysMap: {
      idempotencyKey: "idempotency_key",
      sourceId: "source_id",
      customerId: "customer_id",
    },
  });
