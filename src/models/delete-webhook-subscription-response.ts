import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteWebhookSubscriptionResponse = {
  errors?: Error[];
};

export const deleteWebhookSubscriptionResponseSchema: Schema<DeleteWebhookSubscriptionResponse> =
  s.object<DeleteWebhookSubscriptionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
