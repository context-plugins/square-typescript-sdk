import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardActivityCreatedEventObjectSchema,
  type GiftCardActivityCreatedEventObject,
} from "./gift-card-activity-created-event-object.js";

export type GiftCardActivityCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: GiftCardActivityCreatedEventObject;
};

export const giftCardActivityCreatedEventDataSchema: Schema<GiftCardActivityCreatedEventData> =
  s.object<GiftCardActivityCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => giftCardActivityCreatedEventObjectSchema)),
  });
