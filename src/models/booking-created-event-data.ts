import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bookingCreatedEventObjectSchema,
  type BookingCreatedEventObject,
} from "./booking-created-event-object.js";

export type BookingCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: BookingCreatedEventObject;
};

export const bookingCreatedEventDataSchema: Schema<BookingCreatedEventData> =
  s.object<BookingCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => bookingCreatedEventObjectSchema)),
  });
