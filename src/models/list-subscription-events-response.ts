import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { subscriptionEventSchema, type SubscriptionEvent } from "./subscription-event.js";

export type ListSubscriptionEventsResponse = {
  errors?: Error[];
  subscriptionEvents?: SubscriptionEvent[];
  cursor?: string;
};

export const listSubscriptionEventsResponseSchema: Schema<ListSubscriptionEventsResponse> =
  s.object<ListSubscriptionEventsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    subscriptionEvents: s.optional(s.array(s.lazy(() => subscriptionEventSchema))),
    cursor: s.optional(s.string()),
    _keysMap: {
      subscriptionEvents: "subscription_events",
    },
  });
