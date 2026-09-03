import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardBrandSchema, type CardBrand } from "./card-brand.js";
import { disputeReasonSchema, type DisputeReason } from "./dispute-reason.js";
import { disputeStateSchema, type DisputeState } from "./dispute-state.js";
import { disputedPaymentSchema, type DisputedPayment } from "./disputed-payment.js";
import { moneySchema, type Money } from "./money.js";

export type Dispute = {
  disputeId?: string | null;
  id?: string;
  amountMoney?: Money;
  reason?: DisputeReason;
  state?: DisputeState;
  dueAt?: string | null;
  disputedPayment?: DisputedPayment;
  evidenceIds?: string[] | null;
  cardBrand?: CardBrand;
  createdAt?: string;
  updatedAt?: string;
  brandDisputeId?: string | null;
  reportedDate?: string | null;
  reportedAt?: string | null;
  version?: number;
  locationId?: string | null;
};

export const disputeSchema: Schema<Dispute> = s.object<Dispute>({
  disputeId: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  amountMoney: s.optional(s.lazy(() => moneySchema)),
  reason: s.optional(s.lazy(() => disputeReasonSchema)),
  state: s.optional(s.lazy(() => disputeStateSchema)),
  dueAt: s.optionalNullable(s.string()),
  disputedPayment: s.optional(s.lazy(() => disputedPaymentSchema)),
  evidenceIds: s.optionalNullable(s.array(s.string())),
  cardBrand: s.optional(s.lazy(() => cardBrandSchema)),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  brandDisputeId: s.optionalNullable(s.string()),
  reportedDate: s.optionalNullable(s.string()),
  reportedAt: s.optionalNullable(s.string()),
  version: s.optional(s.number()),
  locationId: s.optionalNullable(s.string()),
  _keysMap: {
    disputeId: "dispute_id",
    amountMoney: "amount_money",
    dueAt: "due_at",
    disputedPayment: "disputed_payment",
    evidenceIds: "evidence_ids",
    cardBrand: "card_brand",
    createdAt: "created_at",
    updatedAt: "updated_at",
    brandDisputeId: "brand_dispute_id",
    reportedDate: "reported_date",
    reportedAt: "reported_at",
    locationId: "location_id",
  },
});
