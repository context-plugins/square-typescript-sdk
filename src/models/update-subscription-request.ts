import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

export type UpdateSubscriptionRequest = {
  subscription?: Subscription;
};

export const updateSubscriptionRequestSchema: Schema<UpdateSubscriptionRequest> =
  s.object<UpdateSubscriptionRequest>({
    subscription: s.optional(s.lazy(() => subscriptionSchema)),
  });
