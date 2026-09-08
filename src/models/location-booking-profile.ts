import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The booking profile of a seller's location, including the location's ID and whether the location
 * is enabled for online booking.
 */
export type LocationBookingProfile = {
  /** The ID of the [location](entity:Location). */
  locationId?: string | null;
  /** Url for the online booking site for this location. */
  bookingSiteUrl?: string | null;
  /** Indicates whether the location is enabled for online booking. */
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
