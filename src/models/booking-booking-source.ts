import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BookingBookingSource = {
  FirstPartyMerchant: "FIRST_PARTY_MERCHANT",
  FirstPartyBuyer: "FIRST_PARTY_BUYER",
  ThirdPartyBuyer: "THIRD_PARTY_BUYER",
  Api: "API",
} as const;
export type BookingBookingSource =
  | (typeof BookingBookingSource)[keyof typeof BookingBookingSource]
  | (string & {});

export const bookingBookingSourceSchema: EnumSchema<BookingBookingSource> =
  s.enumOf<BookingBookingSource>(BookingBookingSource);
