import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { locationBookingProfileSchema, type LocationBookingProfile } from "./location-booking-profile.js";

export type ListLocationBookingProfilesResponse = {
  locationBookingProfiles?: LocationBookingProfile[];
  cursor?: string;
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
