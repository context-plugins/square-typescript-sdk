import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyEventAccumulatePointsSchema,
  type LoyaltyEventAccumulatePoints,
} from "./loyalty-event-accumulate-points.js";
import {
  loyaltyEventAccumulatePromotionPointsSchema,
  type LoyaltyEventAccumulatePromotionPoints,
} from "./loyalty-event-accumulate-promotion-points.js";
import {
  loyaltyEventAdjustPointsSchema,
  type LoyaltyEventAdjustPoints,
} from "./loyalty-event-adjust-points.js";
import {
  loyaltyEventCreateRewardSchema,
  type LoyaltyEventCreateReward,
} from "./loyalty-event-create-reward.js";
import {
  loyaltyEventDeleteRewardSchema,
  type LoyaltyEventDeleteReward,
} from "./loyalty-event-delete-reward.js";
import {
  loyaltyEventExpirePointsSchema,
  type LoyaltyEventExpirePoints,
} from "./loyalty-event-expire-points.js";
import { loyaltyEventOtherSchema, type LoyaltyEventOther } from "./loyalty-event-other.js";
import {
  loyaltyEventRedeemRewardSchema,
  type LoyaltyEventRedeemReward,
} from "./loyalty-event-redeem-reward.js";
import { loyaltyEventSourceSchema, type LoyaltyEventSource } from "./loyalty-event-source.js";
import { loyaltyEventTypeSchema, type LoyaltyEventType } from "./loyalty-event-type.js";

export type LoyaltyEvent = {
  id: string;
  type: LoyaltyEventType;
  createdAt: string;
  accumulatePoints?: LoyaltyEventAccumulatePoints;
  createReward?: LoyaltyEventCreateReward;
  redeemReward?: LoyaltyEventRedeemReward;
  deleteReward?: LoyaltyEventDeleteReward;
  adjustPoints?: LoyaltyEventAdjustPoints;
  loyaltyAccountId: string;
  locationId?: string;
  source: LoyaltyEventSource;
  expirePoints?: LoyaltyEventExpirePoints;
  otherEvent?: LoyaltyEventOther;
  accumulatePromotionPoints?: LoyaltyEventAccumulatePromotionPoints;
};

export const loyaltyEventSchema: Schema<LoyaltyEvent> = s.object<LoyaltyEvent>({
  id: s.string(),
  type: loyaltyEventTypeSchema,
  createdAt: s.string(),
  accumulatePoints: s.optional(s.lazy(() => loyaltyEventAccumulatePointsSchema)),
  createReward: s.optional(s.lazy(() => loyaltyEventCreateRewardSchema)),
  redeemReward: s.optional(s.lazy(() => loyaltyEventRedeemRewardSchema)),
  deleteReward: s.optional(s.lazy(() => loyaltyEventDeleteRewardSchema)),
  adjustPoints: s.optional(s.lazy(() => loyaltyEventAdjustPointsSchema)),
  loyaltyAccountId: s.string(),
  locationId: s.optional(s.string()),
  source: loyaltyEventSourceSchema,
  expirePoints: s.optional(s.lazy(() => loyaltyEventExpirePointsSchema)),
  otherEvent: s.optional(s.lazy(() => loyaltyEventOtherSchema)),
  accumulatePromotionPoints: s.optional(s.lazy(() => loyaltyEventAccumulatePromotionPointsSchema)),
  _keysMap: {
    createdAt: "created_at",
    accumulatePoints: "accumulate_points",
    createReward: "create_reward",
    redeemReward: "redeem_reward",
    deleteReward: "delete_reward",
    adjustPoints: "adjust_points",
    loyaltyAccountId: "loyalty_account_id",
    locationId: "location_id",
    expirePoints: "expire_points",
    otherEvent: "other_event",
    accumulatePromotionPoints: "accumulate_promotion_points",
  },
});
