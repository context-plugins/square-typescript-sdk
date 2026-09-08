import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phaseSchema, type Phase } from "./phase.js";
import { subscriptionEventInfoSchema, type SubscriptionEventInfo } from "./subscription-event-info.js";
import {
  subscriptionEventSubscriptionEventTypeSchema,
  type SubscriptionEventSubscriptionEventType,
} from "./subscription-event-subscription-event-type.js";

/** Describes changes to a subscription and the subscription status. */
export type SubscriptionEvent = {
  /** The ID of the subscription event. */
  id: string;
  /** Supported types of an event occurred to a subscription. */
  subscriptionEventType: SubscriptionEventSubscriptionEventType;
  /**
   * The `YYYY-MM-DD`-formatted date (for example, 2013-01-15) when the subscription event occurred.
   */
  effectiveDate: string;
  /** The day-of-the-month the billing anchor date was changed to, if applicable. */
  monthlyBillingAnchorDate?: number;
  /** Provides information about the subscription event. */
  info?: SubscriptionEventInfo;
  /** A list of Phases, to pass phase-specific information used in the swap. */
  phases?: Phase[] | null;
  /** The ID of the subscription plan variation associated with the subscription. */
  planVariationId: string;
};

export const subscriptionEventSchema: Schema<SubscriptionEvent> = s.object<SubscriptionEvent>({
  id: s.string(),
  subscriptionEventType: subscriptionEventSubscriptionEventTypeSchema,
  effectiveDate: s.string(),
  monthlyBillingAnchorDate: s.optional(s.number()),
  info: s.optional(s.lazy(() => subscriptionEventInfoSchema)),
  phases: s.optionalNullable(s.array(s.lazy(() => phaseSchema))),
  planVariationId: s.string(),
  _keysMap: {
    subscriptionEventType: "subscription_event_type",
    effectiveDate: "effective_date",
    monthlyBillingAnchorDate: "monthly_billing_anchor_date",
    planVariationId: "plan_variation_id",
  },
});
