import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { subscriptionTestResultSchema, type SubscriptionTestResult } from "./subscription-test-result.js";

/**
 * Defines the fields that are included in the response body of a request to the
 * [TestWebhookSubscription](api-endpoint:WebhookSubscriptions-TestWebhookSubscription) endpoint.
 *
 * Note: If there are errors processing the request, the
 * [SubscriptionTestResult](entity:SubscriptionTestResult) field is not present.
 */
export type TestWebhookSubscriptionResponse = {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents the details of a webhook subscription, including notification URL, event types, and
   * signature key.
   */
  subscriptionTestResult?: SubscriptionTestResult;
};

export const testWebhookSubscriptionResponseSchema: Schema<TestWebhookSubscriptionResponse> =
  s.object<TestWebhookSubscriptionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    subscriptionTestResult: s.optional(s.lazy(() => subscriptionTestResultSchema)),
    _keysMap: {
      subscriptionTestResult: "subscription_test_result",
    },
  });
