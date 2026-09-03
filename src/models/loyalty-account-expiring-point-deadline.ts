import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoyaltyAccountExpiringPointDeadline = {
  points: number;
  expiresAt: string;
};

export const loyaltyAccountExpiringPointDeadlineSchema: Schema<LoyaltyAccountExpiringPointDeadline> =
  s.object<LoyaltyAccountExpiringPointDeadline>({
    points: s.number(),
    expiresAt: s.string(),
    _keysMap: {
      expiresAt: "expires_at",
    },
  });
