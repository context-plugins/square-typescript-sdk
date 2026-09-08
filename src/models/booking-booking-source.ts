import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Supported sources a booking was created from. */
export const BookingBookingSource = {
  /**
   * The booking was created by a seller from a Square Appointments application, such as the Square
   * Appointments Dashboard or a Square Appointments mobile app.
   */
  FirstPartyMerchant: "FIRST_PARTY_MERCHANT",
  /**
   * The booking was created by a buyer from a Square Appointments application, such as Square
   * Online Booking Site.
   */
  FirstPartyBuyer: "FIRST_PARTY_BUYER",
  /** The booking was created by a buyer created from a third-party application. */
  ThirdPartyBuyer: "THIRD_PARTY_BUYER",
  /** The booking was created by a seller or a buyer from the Square Bookings API. */
  Api: "API",
} as const;
export type BookingBookingSource =
  | (typeof BookingBookingSource)[keyof typeof BookingBookingSource]
  | (string & {});

export const bookingBookingSourceSchema: EnumSchema<BookingBookingSource> =
  s.enumOf<BookingBookingSource>(BookingBookingSource);
