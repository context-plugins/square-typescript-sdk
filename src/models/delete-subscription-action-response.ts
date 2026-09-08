import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

/**
 * Defines output parameters in a response of the
 * [DeleteSubscriptionAction](api-endpoint:Subscriptions-DeleteSubscriptionAction) endpoint.
 */
export type DeleteSubscriptionActionResponse = {
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

export const deleteSubscriptionActionResponseSchema: Schema<DeleteSubscriptionActionResponse> =
  s.object<DeleteSubscriptionActionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    subscription: s.optional(s.lazy(() => subscriptionSchema)),
  });
