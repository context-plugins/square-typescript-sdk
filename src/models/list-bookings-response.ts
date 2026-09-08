import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bookingSchema, type Booking } from "./booking.js";
import { errorSchema, type Error } from "./error.js";

export type ListBookingsResponse = {
  /** The list of targeted bookings. */
  bookings?: Booking[];
  /**
   * The pagination cursor to be used in the subsequent request to get the next page of the results.
   * Stop retrieving the next page of the results when the cursor is not set.
   */
  cursor?: string;
  /** Errors that occurred during the request. */
  errors?: Error[];
};

export const listBookingsResponseSchema: Schema<ListBookingsResponse> = s.object<ListBookingsResponse>({
  bookings: s.optional(s.array(s.lazy(() => bookingSchema))),
  cursor: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
