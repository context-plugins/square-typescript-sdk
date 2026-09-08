import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes when the loyalty program expires. */
export type LoyaltyProgramExpirationPolicy = {
  /**
   * The number of months before points expire, in `P[n]M` RFC 3339 duration format. For example, a
   * value of `P12M` represents a duration of 12 months. Points are valid through the last day of
   * the month in which they are scheduled to expire. For example, with a `P12M` duration, points
   * earned on July 6, 2020 expire on August 1, 2021.
   */
  expirationDuration: string;
};

export const loyaltyProgramExpirationPolicySchema: Schema<LoyaltyProgramExpirationPolicy> =
  s.object<LoyaltyProgramExpirationPolicy>({
    expirationDuration: s.string(),
    _keysMap: {
      expirationDuration: "expiration_duration",
    },
  });
