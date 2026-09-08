import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

export type SubscriptionCreatedEventObject = {
  /**
   * Represents a subscription purchased by a customer.
   *
   * For more information, see [Manage
   * Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions).
   */
  subscription?: Subscription;
};

export const subscriptionCreatedEventObjectSchema: Schema<SubscriptionCreatedEventObject> =
  s.object<SubscriptionCreatedEventObject>({
    subscription: s.optional(s.lazy(() => subscriptionSchema)),
  });
