import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardActivityUpdatedEventObjectSchema,
  type GiftCardActivityUpdatedEventObject,
} from "./gift-card-activity-updated-event-object.js";

export type GiftCardActivityUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: GiftCardActivityUpdatedEventObject;
};

export const giftCardActivityUpdatedEventDataSchema: Schema<GiftCardActivityUpdatedEventData> =
  s.object<GiftCardActivityUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => giftCardActivityUpdatedEventObjectSchema)),
  });
