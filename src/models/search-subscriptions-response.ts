import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

export type SearchSubscriptionsResponse = {
  errors?: Error[];
  subscriptions?: Subscription[];
  cursor?: string;
};

export const searchSubscriptionsResponseSchema: Schema<SearchSubscriptionsResponse> =
  s.object<SearchSubscriptionsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    subscriptions: s.optional(s.array(s.lazy(() => subscriptionSchema))),
    cursor: s.optional(s.string()),
  });
