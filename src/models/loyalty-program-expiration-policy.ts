import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoyaltyProgramExpirationPolicy = {
  expirationDuration: string;
};

export const loyaltyProgramExpirationPolicySchema: Schema<LoyaltyProgramExpirationPolicy> =
  s.object<LoyaltyProgramExpirationPolicy>({
    expirationDuration: s.string(),
    _keysMap: {
      expirationDuration: "expiration_duration",
    },
  });
