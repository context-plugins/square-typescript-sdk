import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { giftCardActivitySchema, type GiftCardActivity } from "./gift-card-activity.js";

export type ListGiftCardActivitiesResponse = {
  errors?: Error[];
  giftCardActivities?: GiftCardActivity[];
  cursor?: string;
};

export const listGiftCardActivitiesResponseSchema: Schema<ListGiftCardActivitiesResponse> =
  s.object<ListGiftCardActivitiesResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    giftCardActivities: s.optional(s.array(s.lazy(() => giftCardActivitySchema))),
    cursor: s.optional(s.string()),
    _keysMap: {
      giftCardActivities: "gift_card_activities",
    },
  });
