import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LocationBookingProfile = {
  locationId?: string | null;
  bookingSiteUrl?: string | null;
  onlineBookingEnabled?: boolean | null;
};

export const locationBookingProfileSchema: Schema<LocationBookingProfile> = s.object<LocationBookingProfile>({
  locationId: s.optionalNullable(s.string()),
  bookingSiteUrl: s.optionalNullable(s.string()),
  onlineBookingEnabled: s.optionalNullable(s.boolean()),
  _keysMap: {
    locationId: "location_id",
    bookingSiteUrl: "booking_site_url",
    onlineBookingEnabled: "online_booking_enabled",
  },
});
