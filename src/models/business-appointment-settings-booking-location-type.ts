import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Supported types of location where service is provided. */
export const BusinessAppointmentSettingsBookingLocationType = {
  /** The service is provided at a seller location. */
  BusinessLocation: "BUSINESS_LOCATION",
  /** The service is provided at a customer location. */
  CustomerLocation: "CUSTOMER_LOCATION",
  /** The service is provided over the phone. */
  Phone: "PHONE",
} as const;
export type BusinessAppointmentSettingsBookingLocationType =
  | (typeof BusinessAppointmentSettingsBookingLocationType)[keyof typeof BusinessAppointmentSettingsBookingLocationType]
  | (string & {});

export const businessAppointmentSettingsBookingLocationTypeSchema: EnumSchema<BusinessAppointmentSettingsBookingLocationType> =
  s.enumOf<BusinessAppointmentSettingsBookingLocationType>(BusinessAppointmentSettingsBookingLocationType);
