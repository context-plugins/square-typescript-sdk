import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType = {
  PerTeamMember: "PER_TEAM_MEMBER",
  PerLocation: "PER_LOCATION",
} as const;
export type BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType =
  | (typeof BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType)[keyof typeof BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType]
  | (string & {});

export const businessAppointmentSettingsMaxAppointmentsPerDayLimitTypeSchema: EnumSchema<BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType> =
  s.enumOf<BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType>(
    BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType,
  );
