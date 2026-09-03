import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyAccountExpiringPointDeadlineSchema,
  type LoyaltyAccountExpiringPointDeadline,
} from "./loyalty-account-expiring-point-deadline.js";
import { loyaltyAccountMappingSchema, type LoyaltyAccountMapping } from "./loyalty-account-mapping.js";

export type LoyaltyAccount = {
  id?: string;
  programId: string;
  balance?: number;
  lifetimePoints?: number;
  customerId?: string | null;
  enrolledAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
  mapping?: LoyaltyAccountMapping;
  expiringPointDeadlines?: LoyaltyAccountExpiringPointDeadline[] | null;
};

export const loyaltyAccountSchema: Schema<LoyaltyAccount> = s.object<LoyaltyAccount>({
  id: s.optional(s.string()),
  programId: s.string(),
  balance: s.optional(s.number()),
  lifetimePoints: s.optional(s.number()),
  customerId: s.optionalNullable(s.string()),
  enrolledAt: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  mapping: s.optional(s.lazy(() => loyaltyAccountMappingSchema)),
  expiringPointDeadlines: s.optionalNullable(
    s.array(s.lazy(() => loyaltyAccountExpiringPointDeadlineSchema)),
  ),
  _keysMap: {
    programId: "program_id",
    lifetimePoints: "lifetime_points",
    customerId: "customer_id",
    enrolledAt: "enrolled_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
    expiringPointDeadlines: "expiring_point_deadlines",
  },
});
