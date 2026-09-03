import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardUpdatedEventObjectSchema,
  type GiftCardUpdatedEventObject,
} from "./gift-card-updated-event-object.js";

export type GiftCardUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: GiftCardUpdatedEventObject;
};

export const giftCardUpdatedEventDataSchema: Schema<GiftCardUpdatedEventData> =
  s.object<GiftCardUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => giftCardUpdatedEventObjectSchema)),
  });
