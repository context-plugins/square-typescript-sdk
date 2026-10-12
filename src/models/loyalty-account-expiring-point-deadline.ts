import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Represents a set of points for a loyalty account that are scheduled to expire on a specific date.
 */
export type LoyaltyAccountExpiringPointDeadline = {
  /** The number of points scheduled to expire at the `expires_at` timestamp. */
  points: number;
  /** The timestamp of when the points are scheduled to expire, in RFC 3339 format. */
  expiresAt: string;
};

export const loyaltyAccountExpiringPointDeadlineSchema: Schema<LoyaltyAccountExpiringPointDeadline> =
  s.object<LoyaltyAccountExpiringPointDeadline>({
    points: s.int(),
    expiresAt: s.string(),
    _keysMap: {
      expiresAt: "expires_at",
    },
  });
