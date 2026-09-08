import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardUpdatedEventObjectSchema,
  type GiftCardUpdatedEventObject,
} from "./gift-card-updated-event-object.js";

/** The data associated with a `gift_card.updated` event. */
export type GiftCardUpdatedEventData = {
  /** The type of object affected by the event. For this event, the value is `gift_card`. */
  type?: string | null;
  /** The ID of the updated gift card. */
  id?: string;
  /** An object that contains the gift card associated with a `gift_card.updated` event. */
  object?: GiftCardUpdatedEventObject;
};

export const giftCardUpdatedEventDataSchema: Schema<GiftCardUpdatedEventData> =
  s.object<GiftCardUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => giftCardUpdatedEventObjectSchema)),
  });
