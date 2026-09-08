import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyPromotionUpdatedEventObjectSchema,
  type LoyaltyPromotionUpdatedEventObject,
} from "./loyalty-promotion-updated-event-object.js";

/** The data associated with a `loyalty.promotion.updated` event. */
export type LoyaltyPromotionUpdatedEventData = {
  /** The type of object affected by the event. For this event, the value is `loyalty_promotion`. */
  type?: string | null;
  /** The ID of the affected loyalty promotion. */
  id?: string;
  /**
   * An object that contains the loyalty promotion associated with a `loyalty.promotion.updated`
   * event.
   */
  object?: LoyaltyPromotionUpdatedEventObject;
};

export const loyaltyPromotionUpdatedEventDataSchema: Schema<LoyaltyPromotionUpdatedEventData> =
  s.object<LoyaltyPromotionUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => loyaltyPromotionUpdatedEventObjectSchema)),
  });
