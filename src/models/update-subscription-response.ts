import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

/**
 * Defines output parameters in a response from the
 * [UpdateSubscription](api-endpoint:Subscriptions-UpdateSubscription) endpoint.
 */
export type UpdateSubscriptionResponse = {
  /** Errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents a subscription purchased by a customer.
   *
   * For more information, see [Manage
   * Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions).
   */
  subscription?: Subscription;
};

export const updateSubscriptionResponseSchema: Schema<UpdateSubscriptionResponse> =
  s.object<UpdateSubscriptionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    subscription: s.optional(s.lazy(() => subscriptionSchema)),
  });
