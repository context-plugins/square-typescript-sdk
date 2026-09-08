import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Time units of a service duration for bookings. */
export const BusinessAppointmentSettingsAlignmentTime = {
  /** The service duration unit is one visit of a fixed time interval specified by the seller. */
  ServiceDuration: "SERVICE_DURATION",
  /**
   * The service duration unit is a 15-minute interval. Bookings can be scheduled every quarter
   * hour.
   */
  QuarterHourly: "QUARTER_HOURLY",
  /**
   * The service duration unit is a 30-minute interval. Bookings can be scheduled every half hour.
   */
  HalfHourly: "HALF_HOURLY",
  /** The service duration unit is a 60-minute interval. Bookings can be scheduled every hour. */
  Hourly: "HOURLY",
} as const;
export type BusinessAppointmentSettingsAlignmentTime =
  | (typeof BusinessAppointmentSettingsAlignmentTime)[keyof typeof BusinessAppointmentSettingsAlignmentTime]
  | (string & {});

export const businessAppointmentSettingsAlignmentTimeSchema: EnumSchema<BusinessAppointmentSettingsAlignmentTime> =
  s.enumOf<BusinessAppointmentSettingsAlignmentTime>(BusinessAppointmentSettingsAlignmentTime);
