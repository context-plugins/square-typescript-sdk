import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyPromotionCreatedEventObjectSchema,
  type LoyaltyPromotionCreatedEventObject,
} from "./loyalty-promotion-created-event-object.js";

/** The data associated with a `loyalty.promotion.created` event. */
export type LoyaltyPromotionCreatedEventData = {
  /** The type of object affected by the event. For this event, the value is `loyalty_promotion`. */
  type?: string | null;
  /** The ID of the affected loyalty promotion. */
  id?: string;
  /**
   * An object that contains the loyalty promotion associated with a `loyalty.promotion.created`
   * event.
   */
  object?: LoyaltyPromotionCreatedEventObject;
};

export const loyaltyPromotionCreatedEventDataSchema: Schema<LoyaltyPromotionCreatedEventData> =
  s.object<LoyaltyPromotionCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => loyaltyPromotionCreatedEventObjectSchema)),
  });
