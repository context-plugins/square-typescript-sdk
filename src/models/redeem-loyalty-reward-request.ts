import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RedeemLoyaltyRewardRequest = {
  idempotencyKey: string;
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
