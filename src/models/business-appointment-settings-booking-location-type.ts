import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BusinessAppointmentSettingsBookingLocationType = {
  BusinessLocation: "BUSINESS_LOCATION",
  CustomerLocation: "CUSTOMER_LOCATION",
  Phone: "PHONE",
} as const;
export type BusinessAppointmentSettingsBookingLocationType =
  | (typeof BusinessAppointmentSettingsBookingLocationType)[keyof typeof BusinessAppointmentSettingsBookingLocationType]
  | (string & {});

export const businessAppointmentSettingsBookingLocationTypeSchema: EnumSchema<BusinessAppointmentSettingsBookingLocationType> =
  s.enumOf<BusinessAppointmentSettingsBookingLocationType>(BusinessAppointmentSettingsBookingLocationType);
