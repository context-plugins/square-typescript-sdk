import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyPromotionUpdatedEventObjectSchema,
  type LoyaltyPromotionUpdatedEventObject,
} from "./loyalty-promotion-updated-event-object.js";

export type LoyaltyPromotionUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: LoyaltyPromotionUpdatedEventObject;
};

export const loyaltyPromotionUpdatedEventDataSchema: Schema<LoyaltyPromotionUpdatedEventData> =
  s.object<LoyaltyPromotionUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => loyaltyPromotionUpdatedEventObjectSchema)),
  });
