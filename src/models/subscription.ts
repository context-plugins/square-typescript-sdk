import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import { phaseSchema, type Phase } from "./phase.js";
import { subscriptionActionSchema, type SubscriptionAction } from "./subscription-action.js";
import { subscriptionSourceSchema, type SubscriptionSource } from "./subscription-source.js";
import { subscriptionStatusSchema, type SubscriptionStatus } from "./subscription-status.js";

export type Subscription = {
  id?: string;
  locationId?: string;
  planVariationId?: string;
  customerId?: string;
  startDate?: string;
  canceledDate?: string | null;
  chargedThroughDate?: string;
  status?: SubscriptionStatus;
  taxPercentage?: string | null;
  invoiceIds?: string[];
  priceOverrideMoney?: Money;
  version?: number;
  createdAt?: string;
  cardId?: string | null;
  timezone?: string;
  source?: SubscriptionSource;
  actions?: SubscriptionAction[] | null;
  monthlyBillingAnchorDate?: number;
  phases?: Phase[];
  completedDate?: string | null;
};

export const subscriptionSchema: Schema<Subscription> = s.object<Subscription>({
  id: s.optional(s.string()),
  locationId: s.optional(s.string()),
  planVariationId: s.optional(s.string()),
  customerId: s.optional(s.string()),
  startDate: s.optional(s.string()),
  canceledDate: s.optionalNullable(s.string()),
  chargedThroughDate: s.optional(s.string()),
  status: s.optional(s.lazy(() => subscriptionStatusSchema)),
  taxPercentage: s.optionalNullable(s.string()),
  invoiceIds: s.optional(s.array(s.string())),
  priceOverrideMoney: s.optional(s.lazy(() => moneySchema)),
  version: s.optional(s.number()),
  createdAt: s.optional(s.string()),
  cardId: s.optionalNullable(s.string()),
  timezone: s.optional(s.string()),
  source: s.optional(s.lazy(() => subscriptionSourceSchema)),
  actions: s.optionalNullable(s.array(s.lazy(() => subscriptionActionSchema))),
  monthlyBillingAnchorDate: s.optional(s.number()),
  phases: s.optional(s.array(s.lazy(() => phaseSchema))),
  completedDate: s.optionalNullable(s.string()),
  _keysMap: {
    locationId: "location_id",
    planVariationId: "plan_variation_id",
    customerId: "customer_id",
    startDate: "start_date",
    canceledDate: "canceled_date",
    chargedThroughDate: "charged_through_date",
    taxPercentage: "tax_percentage",
    invoiceIds: "invoice_ids",
    priceOverrideMoney: "price_override_money",
    createdAt: "created_at",
    cardId: "card_id",
    monthlyBillingAnchorDate: "monthly_billing_anchor_date",
    completedDate: "completed_date",
  },
});
