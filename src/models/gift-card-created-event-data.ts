import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardCreatedEventObjectSchema,
  type GiftCardCreatedEventObject,
} from "./gift-card-created-event-object.js";

/** The data associated with a `gift_card.created` event. */
export type GiftCardCreatedEventData = {
  /** The type of object affected by the event. For this event, the value is `gift_card`. */
  type?: string | null;
  /** The ID of the new gift card. */
  id?: string;
  /** An object that contains the gift card associated with a `gift_card.created` event. */
  object?: GiftCardCreatedEventObject;
};

export const giftCardCreatedEventDataSchema: Schema<GiftCardCreatedEventData> =
  s.object<GiftCardCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => giftCardCreatedEventObjectSchema)),
  });
