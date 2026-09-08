import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

/**
 * Defines input parameters in a request to the
 * [UpdateSubscription](api-endpoint:Subscriptions-UpdateSubscription) endpoint.
 */
export type UpdateSubscriptionRequest = {
  /**
   * Represents a subscription purchased by a customer.
   *
   * For more information, see [Manage
   * Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions).
   */
  subscription?: Subscription;
};

export const updateSubscriptionRequestSchema: Schema<UpdateSubscriptionRequest> =
  s.object<UpdateSubscriptionRequest>({
    subscription: s.optional(s.lazy(() => subscriptionSchema)),
  });
