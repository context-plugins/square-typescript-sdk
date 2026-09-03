import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { subscriptionActionSchema, type SubscriptionAction } from "./subscription-action.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

export type PauseSubscriptionResponse = {
  errors?: Error[];
  subscription?: Subscription;
  actions?: SubscriptionAction[];
};

export const pauseSubscriptionResponseSchema: Schema<PauseSubscriptionResponse> =
  s.object<PauseSubscriptionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    subscription: s.optional(s.lazy(() => subscriptionSchema)),
    actions: s.optional(s.array(s.lazy(() => subscriptionActionSchema))),
  });
