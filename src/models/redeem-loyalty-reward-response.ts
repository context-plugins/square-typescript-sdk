import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyEventSchema, type LoyaltyEvent } from "./loyalty-event.js";

export type RedeemLoyaltyRewardResponse = {
  errors?: Error[];
  event?: LoyaltyEvent;
};

export const redeemLoyaltyRewardResponseSchema: Schema<RedeemLoyaltyRewardResponse> =
  s.object<RedeemLoyaltyRewardResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    event: s.optional(s.lazy(() => loyaltyEventSchema)),
  });
