import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyPromotionCreatedEventObjectSchema,
  type LoyaltyPromotionCreatedEventObject,
} from "./loyalty-promotion-created-event-object.js";

export type LoyaltyPromotionCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: LoyaltyPromotionCreatedEventObject;
};

export const loyaltyPromotionCreatedEventDataSchema: Schema<LoyaltyPromotionCreatedEventData> =
  s.object<LoyaltyPromotionCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => loyaltyPromotionCreatedEventObjectSchema)),
  });
