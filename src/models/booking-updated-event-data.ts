import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bookingUpdatedEventObjectSchema,
  type BookingUpdatedEventObject,
} from "./booking-updated-event-object.js";

export type BookingUpdatedEventData = {
  /** The type of the event data object. The value is `"booking"`. */
  type?: string | null;
  /** The ID of the event data object. */
  id?: string;
  object?: BookingUpdatedEventObject;
};

export const bookingUpdatedEventDataSchema: Schema<BookingUpdatedEventData> =
  s.object<BookingUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => bookingUpdatedEventObjectSchema)),
  });
