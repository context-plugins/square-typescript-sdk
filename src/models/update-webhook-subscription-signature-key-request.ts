import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Updates a [Subscription](entity:WebhookSubscription) by replacing the existing signature key with
 * a new one.
 */
export type UpdateWebhookSubscriptionSignatureKeyRequest = {
  /**
   * A unique string that identifies the
   * [UpdateWebhookSubscriptionSignatureKey](api-endpoint:WebhookSubscriptions-UpdateWebhookSubscriptionSignatureKey)
   * request.
   */
  idempotencyKey?: string | null;
};

export const updateWebhookSubscriptionSignatureKeyRequestSchema: Schema<UpdateWebhookSubscriptionSignatureKeyRequest> =
  s.object<UpdateWebhookSubscriptionSignatureKeyRequest>({
    idempotencyKey: s.optionalNullable(s.string()),
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
