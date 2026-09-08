import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Defines the fields that are included in the response body of a request to the
 * [DeleteWebhookSubscription](api-endpoint:WebhookSubscriptions-DeleteWebhookSubscription)
 * endpoint.
 */
export type DeleteWebhookSubscriptionResponse = {
  /** Information on errors encountered during the request. */
  errors?: Error[];
};

export const deleteWebhookSubscriptionResponseSchema: Schema<DeleteWebhookSubscriptionResponse> =
  s.object<DeleteWebhookSubscriptionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
