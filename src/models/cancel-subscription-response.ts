import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { subscriptionActionSchema, type SubscriptionAction } from "./subscription-action.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

/**
 * Defines output parameters in a response from the
 * [CancelSubscription](api-endpoint:Subscriptions-CancelSubscription) endpoint.
 */
export type CancelSubscriptionResponse = {
  /** Errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents a subscription purchased by a customer.
   *
   * For more information, see [Manage
   * Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions).
   */
  subscription?: Subscription;
  /** A list of a single `CANCEL` action scheduled for the subscription. */
  actions?: SubscriptionAction[];
};

export const cancelSubscriptionResponseSchema: Schema<CancelSubscriptionResponse> =
  s.object<CancelSubscriptionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    subscription: s.optional(s.lazy(() => subscriptionSchema)),
    actions: s.optional(s.array(s.lazy(() => subscriptionActionSchema))),
  });
