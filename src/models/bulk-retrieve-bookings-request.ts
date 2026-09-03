import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BulkRetrieveBookingsRequest = {
  bookingIds: string[];
};

export const bulkRetrieveBookingsRequestSchema: Schema<BulkRetrieveBookingsRequest> =
  s.object<BulkRetrieveBookingsRequest>({
    bookingIds: s.array(s.string()),
    _keysMap: {
      bookingIds: "booking_ids",
    },
  });
