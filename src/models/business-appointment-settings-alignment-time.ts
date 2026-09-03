import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BusinessAppointmentSettingsAlignmentTime = {
  ServiceDuration: "SERVICE_DURATION",
  QuarterHourly: "QUARTER_HOURLY",
  HalfHourly: "HALF_HOURLY",
  Hourly: "HOURLY",
} as const;
export type BusinessAppointmentSettingsAlignmentTime =
  | (typeof BusinessAppointmentSettingsAlignmentTime)[keyof typeof BusinessAppointmentSettingsAlignmentTime]
  | (string & {});

export const businessAppointmentSettingsAlignmentTimeSchema: EnumSchema<BusinessAppointmentSettingsAlignmentTime> =
  s.enumOf<BusinessAppointmentSettingsAlignmentTime>(BusinessAppointmentSettingsAlignmentTime);
