import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardCreatedEventObjectSchema,
  type GiftCardCreatedEventObject,
} from "./gift-card-created-event-object.js";

export type GiftCardCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: GiftCardCreatedEventObject;
};

export const giftCardCreatedEventDataSchema: Schema<GiftCardCreatedEventData> =
  s.object<GiftCardCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => giftCardCreatedEventObjectSchema)),
  });
