import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { locationBookingProfileSchema, type LocationBookingProfile } from "./location-booking-profile.js";

export type RetrieveLocationBookingProfileResponse = {
  locationBookingProfile?: LocationBookingProfile;
  errors?: Error[];
};

export const retrieveLocationBookingProfileResponseSchema: Schema<RetrieveLocationBookingProfileResponse> =
  s.object<RetrieveLocationBookingProfileResponse>({
    locationBookingProfile: s.optional(s.lazy(() => locationBookingProfileSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      locationBookingProfile: "location_booking_profile",
    },
  });
