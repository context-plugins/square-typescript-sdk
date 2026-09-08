import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Choices of customer-facing time zone used for bookings. */
export const BusinessBookingProfileCustomerTimezoneChoice = {
  /** Use the time zone of the business location for bookings. */
  BusinessLocationTimezone: "BUSINESS_LOCATION_TIMEZONE",
  /** Use the customer-chosen time zone for bookings. */
  CustomerChoice: "CUSTOMER_CHOICE",
} as const;
export type BusinessBookingProfileCustomerTimezoneChoice =
  | (typeof BusinessBookingProfileCustomerTimezoneChoice)[keyof typeof BusinessBookingProfileCustomerTimezoneChoice]
  | (string & {});

export const businessBookingProfileCustomerTimezoneChoiceSchema: EnumSchema<BusinessBookingProfileCustomerTimezoneChoice> =
  s.enumOf<BusinessBookingProfileCustomerTimezoneChoice>(BusinessBookingProfileCustomerTimezoneChoice);
