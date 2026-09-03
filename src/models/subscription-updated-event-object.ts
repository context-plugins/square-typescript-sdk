import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

export type SubscriptionUpdatedEventObject = {
  subscription?: Subscription;
};

export const subscriptionUpdatedEventObjectSchema: Schema<SubscriptionUpdatedEventObject> =
  s.object<SubscriptionUpdatedEventObject>({
    subscription: s.optional(s.lazy(() => subscriptionSchema)),
  });
