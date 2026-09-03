import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateWebhookSubscriptionSignatureKeyRequest = {
  idempotencyKey?: string | null;
};

export const updateWebhookSubscriptionSignatureKeyRequestSchema: Schema<UpdateWebhookSubscriptionSignatureKeyRequest> =
  s.object<UpdateWebhookSubscriptionSignatureKeyRequest>({
    idempotencyKey: s.optionalNullable(s.string()),
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
