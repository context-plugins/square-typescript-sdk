import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

export type UpdateSubscriptionResponse = {
  errors?: Error[];
  subscription?: Subscription;
};

export const updateSubscriptionResponseSchema: Schema<UpdateSubscriptionResponse> =
  s.object<UpdateSubscriptionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    subscription: s.optional(s.lazy(() => subscriptionSchema)),
  });
