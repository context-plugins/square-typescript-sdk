import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BusinessBookingProfileCustomerTimezoneChoice = {
  BusinessLocationTimezone: "BUSINESS_LOCATION_TIMEZONE",
  CustomerChoice: "CUSTOMER_CHOICE",
} as const;
export type BusinessBookingProfileCustomerTimezoneChoice =
  | (typeof BusinessBookingProfileCustomerTimezoneChoice)[keyof typeof BusinessBookingProfileCustomerTimezoneChoice]
  | (string & {});

export const businessBookingProfileCustomerTimezoneChoiceSchema: EnumSchema<BusinessBookingProfileCustomerTimezoneChoice> =
  s.enumOf<BusinessBookingProfileCustomerTimezoneChoice>(BusinessBookingProfileCustomerTimezoneChoice);
