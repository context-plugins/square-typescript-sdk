import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import { phaseSchema, type Phase } from "./phase.js";
import { subscriptionSourceSchema, type SubscriptionSource } from "./subscription-source.js";

export type CreateSubscriptionRequest = {
  idempotencyKey?: string;
  locationId: string;
  planVariationId?: string;
  customerId: string;
  startDate?: string;
  canceledDate?: string;
  taxPercentage?: string;
  priceOverrideMoney?: Money;
  cardId?: string;
  timezone?: string;
  source?: SubscriptionSource;
  monthlyBillingAnchorDate?: number;
  phases?: Phase[];
};

export const createSubscriptionRequestSchema: Schema<CreateSubscriptionRequest> =
  s.object<CreateSubscriptionRequest>({
    idempotencyKey: s.optional(s.string()),
    locationId: s.string(),
    planVariationId: s.optional(s.string()),
    customerId: s.string(),
    startDate: s.optional(s.string()),
    canceledDate: s.optional(s.string()),
    taxPercentage: s.optional(s.string()),
    priceOverrideMoney: s.optional(s.lazy(() => moneySchema)),
    cardId: s.optional(s.string()),
    timezone: s.optional(s.string()),
    source: s.optional(s.lazy(() => subscriptionSourceSchema)),
    monthlyBillingAnchorDate: s.optional(s.number()),
    phases: s.optional(s.array(s.lazy(() => phaseSchema))),
    _keysMap: {
      idempotencyKey: "idempotency_key",
      locationId: "location_id",
      planVariationId: "plan_variation_id",
      customerId: "customer_id",
      startDate: "start_date",
      canceledDate: "canceled_date",
      taxPercentage: "tax_percentage",
      priceOverrideMoney: "price_override_money",
      cardId: "card_id",
      monthlyBillingAnchorDate: "monthly_billing_anchor_date",
    },
  });
