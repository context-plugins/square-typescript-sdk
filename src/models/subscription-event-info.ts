import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionEventInfoCodeSchema,
  type SubscriptionEventInfoCode,
} from "./subscription-event-info-code.js";

/** Provides information about the subscription event. */
export type SubscriptionEventInfo = {
  /** A human-readable explanation for the event. */
  detail?: string | null;
  /** Supported info codes of a subscription event. */
  code?: SubscriptionEventInfoCode;
};

export const subscriptionEventInfoSchema: Schema<SubscriptionEventInfo> = s.object<SubscriptionEventInfo>({
  detail: s.optionalNullable(s.string()),
  code: s.optional(s.lazy(() => subscriptionEventInfoCodeSchema)),
});
