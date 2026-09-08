import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { retrieveBookingResponseSchema, type RetrieveBookingResponse } from "./retrieve-booking-response.js";

/** Response payload for bulk retrieval of bookings. */
export type BulkRetrieveBookingsResponse = {
  /**
   * Requested bookings returned as a map containing `booking_id` as the key and
   * `RetrieveBookingResponse` as the value.
   */
  bookings?: Record<string, RetrieveBookingResponse>;
  /** Errors that occurred during the request. */
  errors?: Error[];
};

export const bulkRetrieveBookingsResponseSchema: Schema<BulkRetrieveBookingsResponse> =
  s.object<BulkRetrieveBookingsResponse>({
    bookings: s.optional(
      s.record(
        s.string(),
        s.lazy(() => retrieveBookingResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
