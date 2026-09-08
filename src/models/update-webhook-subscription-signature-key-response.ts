import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Defines the fields that are included in the response body of a request to the
 * [UpdateWebhookSubscriptionSignatureKey](api-endpoint:WebhookSubscriptions-UpdateWebhookSubscriptionSignatureKey)
 * endpoint.
 *
 * Note: If there are errors processing the request, the [Subscription](entity:WebhookSubscription)
 * is not present.
 */
export type UpdateWebhookSubscriptionSignatureKeyResponse = {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** The new Square-generated signature key used to validate the origin of the webhook event. */
  signatureKey?: string;
};

export const updateWebhookSubscriptionSignatureKeyResponseSchema: Schema<UpdateWebhookSubscriptionSignatureKeyResponse> =
  s.object<UpdateWebhookSubscriptionSignatureKeyResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    signatureKey: s.optional(s.string()),
    _keysMap: {
      signatureKey: "signature_key",
    },
  });
