import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Represents the details of a webhook subscription, including notification URL, event types, and
 * signature key.
 */
export type SubscriptionTestResult = {
  /** A Square-generated unique ID for the subscription test result. */
  id?: string;
  /** The status code returned by the subscription notification URL. */
  statusCode?: number | null;
  /** An object containing the payload of the test event. For example, a `payment.created` event. */
  payload?: string | null;
  /**
   * The timestamp of when the subscription was created, in RFC 3339 format. For example,
   * "2016-09-04T23:59:33.123Z".
   */
  createdAt?: string;
  /**
   * The timestamp of when the subscription was updated, in RFC 3339 format. For example,
   * "2016-09-04T23:59:33.123Z". Because a subscription test result is unique, this field is the
   * same as the `created_at` field.
   */
  updatedAt?: string;
};

export const subscriptionTestResultSchema: Schema<SubscriptionTestResult> = s.object<SubscriptionTestResult>({
  id: s.optional(s.string()),
  statusCode: s.optionalNullable(s.number()),
  payload: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  _keysMap: {
    statusCode: "status_code",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
