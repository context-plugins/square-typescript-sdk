import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { subscriptionActionSchema, type SubscriptionAction } from "./subscription-action.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

/**
 * Defines output parameters in a response from the
 * [ResumeSubscription](api-endpoint:Subscriptions-ResumeSubscription) endpoint.
 */
export type ResumeSubscriptionResponse = {
  /** Errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents a subscription purchased by a customer.
   *
   * For more information, see [Manage
   * Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions).
   */
  subscription?: Subscription;
  /** A list of `RESUME` actions created by the request and scheduled for the subscription. */
  actions?: SubscriptionAction[];
};

export const resumeSubscriptionResponseSchema: Schema<ResumeSubscriptionResponse> =
  s.object<ResumeSubscriptionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    subscription: s.optional(s.lazy(() => subscriptionSchema)),
    actions: s.optional(s.array(s.lazy(() => subscriptionActionSchema))),
  });
