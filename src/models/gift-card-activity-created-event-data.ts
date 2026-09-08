import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardActivityCreatedEventObjectSchema,
  type GiftCardActivityCreatedEventObject,
} from "./gift-card-activity-created-event-object.js";

/** Represents the data associated with a `gift_card.activity.created` event. */
export type GiftCardActivityCreatedEventData = {
  /**
   * The type of object affected by the event. For this event, the value is `gift_card_activity`.
   */
  type?: string | null;
  /** The ID of the new gift card activity. */
  id?: string;
  /**
   * An object that contains the gift card activity associated with a `gift_card.activity.created`
   * event.
   */
  object?: GiftCardActivityCreatedEventObject;
};

export const giftCardActivityCreatedEventDataSchema: Schema<GiftCardActivityCreatedEventData> =
  s.object<GiftCardActivityCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => giftCardActivityCreatedEventObjectSchema)),
  });
