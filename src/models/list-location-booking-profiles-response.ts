import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { locationBookingProfileSchema, type LocationBookingProfile } from "./location-booking-profile.js";

export type ListLocationBookingProfilesResponse = {
  /** The list of a seller's location booking profiles. */
  locationBookingProfiles?: LocationBookingProfile[];
  /**
   * The pagination cursor to be used in the subsequent request to get the next page of the results.
   * Stop retrieving the next page of the results when the cursor is not set.
   */
  cursor?: string;
  /** Errors that occurred during the request. */
  errors?: Error[];
};

export const listLocationBookingProfilesResponseSchema: Schema<ListLocationBookingProfilesResponse> =
  s.object<ListLocationBookingProfilesResponse>({
    locationBookingProfiles: s.optional(s.array(s.lazy(() => locationBookingProfileSchema))),
    cursor: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      locationBookingProfiles: "location_booking_profiles",
    },
  });
