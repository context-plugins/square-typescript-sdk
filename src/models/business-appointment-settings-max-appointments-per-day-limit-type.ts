import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Types of daily appointment limits. */
export const BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType = {
  /** The maximum number of daily appointments is set on a per team member basis. */
  PerTeamMember: "PER_TEAM_MEMBER",
  /** The maximum number of daily appointments is set on a per location basis. */
  PerLocation: "PER_LOCATION",
} as const;
export type BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType =
  | (typeof BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType)[keyof typeof BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType]
  | (string & {});

export const businessAppointmentSettingsMaxAppointmentsPerDayLimitTypeSchema: EnumSchema<BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType> =
  s.enumOf<BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType>(
    BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType,
  );
