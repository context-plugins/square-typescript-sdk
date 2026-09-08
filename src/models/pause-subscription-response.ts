import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { subscriptionActionSchema, type SubscriptionAction } from "./subscription-action.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

/**
 * Defines output parameters in a response from the
 * [PauseSubscription](api-endpoint:Subscriptions-PauseSubscription) endpoint.
 */
export type PauseSubscriptionResponse = {
  /** Errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents a subscription purchased by a customer.
   *
   * For more information, see [Manage
   * Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions).
   */
  subscription?: Subscription;
  /** The list of a `PAUSE` action and a possible `RESUME` action created by the request. */
  actions?: SubscriptionAction[];
};

export const pauseSubscriptionResponseSchema: Schema<PauseSubscriptionResponse> =
  s.object<PauseSubscriptionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    subscription: s.optional(s.lazy(() => subscriptionSchema)),
    actions: s.optional(s.array(s.lazy(() => subscriptionActionSchema))),
  });
