import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessBookingProfileSchema, type BusinessBookingProfile } from "./business-booking-profile.js";
import { errorSchema, type Error } from "./error.js";

export type RetrieveBusinessBookingProfileResponse = {
  businessBookingProfile?: BusinessBookingProfile;
  errors?: Error[];
};

export const retrieveBusinessBookingProfileResponseSchema: Schema<RetrieveBusinessBookingProfileResponse> =
  s.object<RetrieveBusinessBookingProfileResponse>({
    businessBookingProfile: s.optional(s.lazy(() => businessBookingProfileSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      businessBookingProfile: "business_booking_profile",
    },
  });
