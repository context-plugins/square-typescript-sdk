import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request payload for bulk retrieval of bookings. */
export type BulkRetrieveBookingsRequest = {
  /** A non-empty list of [Booking](entity:Booking) IDs specifying bookings to retrieve. */
  bookingIds: string[];
};

export const bulkRetrieveBookingsRequestSchema: Schema<BulkRetrieveBookingsRequest> =
  s.object<BulkRetrieveBookingsRequest>({
    bookingIds: s.array(s.string()),
    _keysMap: {
      bookingIds: "booking_ids",
    },
  });
