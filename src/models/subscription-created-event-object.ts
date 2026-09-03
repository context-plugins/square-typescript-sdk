import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

export type SubscriptionCreatedEventObject = {
  subscription?: Subscription;
};

export const subscriptionCreatedEventObjectSchema: Schema<SubscriptionCreatedEventObject> =
  s.object<SubscriptionCreatedEventObject>({
    subscription: s.optional(s.lazy(() => subscriptionSchema)),
  });
