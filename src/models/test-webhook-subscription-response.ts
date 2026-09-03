import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { subscriptionTestResultSchema, type SubscriptionTestResult } from "./subscription-test-result.js";

export type TestWebhookSubscriptionResponse = {
  errors?: Error[];
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
