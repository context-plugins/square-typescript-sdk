import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phaseSchema, type Phase } from "./phase.js";
import { subscriptionEventInfoSchema, type SubscriptionEventInfo } from "./subscription-event-info.js";
import {
  subscriptionEventSubscriptionEventTypeSchema,
  type SubscriptionEventSubscriptionEventType,
} from "./subscription-event-subscription-event-type.js";

export type SubscriptionEvent = {
  id: string;
  subscriptionEventType: SubscriptionEventSubscriptionEventType;
  effectiveDate: string;
  monthlyBillingAnchorDate?: number;
  info?: SubscriptionEventInfo;
  phases?: Phase[] | null;
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
