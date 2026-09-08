import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A request to redeem a loyalty reward. */
export type RedeemLoyaltyRewardRequest = {
  /**
   * A unique string that identifies this `RedeemLoyaltyReward` request. Keys can be any valid
   * string, but must be unique for every request.
   */
  idempotencyKey: string;
  /** The ID of the [location](entity:Location) where the reward is redeemed. */
  locationId: string;
};

export const redeemLoyaltyRewardRequestSchema: Schema<RedeemLoyaltyRewardRequest> =
  s.object<RedeemLoyaltyRewardRequest>({
    idempotencyKey: s.string(),
    locationId: s.string(),
    _keysMap: {
      idempotencyKey: "idempotency_key",
      locationId: "location_id",
    },
  });
