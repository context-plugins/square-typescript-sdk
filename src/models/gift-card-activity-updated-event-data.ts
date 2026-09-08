import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardActivityUpdatedEventObjectSchema,
  type GiftCardActivityUpdatedEventObject,
} from "./gift-card-activity-updated-event-object.js";

/** The data associated with a `gift_card.activity.updated` event. */
export type GiftCardActivityUpdatedEventData = {
  /**
   * The type of object affected by the event. For this event, the value is `gift_card_activity`.
   */
  type?: string | null;
  /** The ID of the updated gift card activity. */
  id?: string;
  /**
   * An object that contains the gift card activity associated with a `gift_card.activity.updated`
   * event.
   */
  object?: GiftCardActivityUpdatedEventObject;
};

export const giftCardActivityUpdatedEventDataSchema: Schema<GiftCardActivityUpdatedEventData> =
  s.object<GiftCardActivityUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => giftCardActivityUpdatedEventObjectSchema)),
  });
