import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  businessAppointmentSettingsAlignmentTimeSchema,
  type BusinessAppointmentSettingsAlignmentTime,
} from "./business-appointment-settings-alignment-time.js";
import {
  businessAppointmentSettingsBookingLocationTypeSchema,
  type BusinessAppointmentSettingsBookingLocationType,
} from "./business-appointment-settings-booking-location-type.js";
import {
  businessAppointmentSettingsCancellationPolicySchema,
  type BusinessAppointmentSettingsCancellationPolicy,
} from "./business-appointment-settings-cancellation-policy.js";
import {
  businessAppointmentSettingsMaxAppointmentsPerDayLimitTypeSchema,
  type BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType,
} from "./business-appointment-settings-max-appointments-per-day-limit-type.js";
import { moneySchema, type Money } from "./money.js";

export type BusinessAppointmentSettings = {
  locationTypes?: BusinessAppointmentSettingsBookingLocationType[] | null;
  alignmentTime?: BusinessAppointmentSettingsAlignmentTime;
  minBookingLeadTimeSeconds?: number | null;
  maxBookingLeadTimeSeconds?: number | null;
  anyTeamMemberBookingEnabled?: boolean | null;
  multipleServiceBookingEnabled?: boolean | null;
  maxAppointmentsPerDayLimitType?: BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType;
  maxAppointmentsPerDayLimit?: number | null;
  cancellationWindowSeconds?: number | null;
  cancellationFeeMoney?: Money;
  cancellationPolicy?: BusinessAppointmentSettingsCancellationPolicy;
  cancellationPolicyText?: string | null;
  skipBookingFlowStaffSelection?: boolean | null;
};

export const businessAppointmentSettingsSchema: Schema<BusinessAppointmentSettings> =
  s.object<BusinessAppointmentSettings>({
    locationTypes: s.optionalNullable(
      s.array(s.lazy(() => businessAppointmentSettingsBookingLocationTypeSchema)),
    ),
    alignmentTime: s.optional(s.lazy(() => businessAppointmentSettingsAlignmentTimeSchema)),
    minBookingLeadTimeSeconds: s.optionalNullable(s.number()),
    maxBookingLeadTimeSeconds: s.optionalNullable(s.number()),
    anyTeamMemberBookingEnabled: s.optionalNullable(s.boolean()),
    multipleServiceBookingEnabled: s.optionalNullable(s.boolean()),
    maxAppointmentsPerDayLimitType: s.optional(
      s.lazy(() => businessAppointmentSettingsMaxAppointmentsPerDayLimitTypeSchema),
    ),
    maxAppointmentsPerDayLimit: s.optionalNullable(s.number()),
    cancellationWindowSeconds: s.optionalNullable(s.number()),
    cancellationFeeMoney: s.optional(s.lazy(() => moneySchema)),
    cancellationPolicy: s.optional(s.lazy(() => businessAppointmentSettingsCancellationPolicySchema)),
    cancellationPolicyText: s.optionalNullable(s.string()),
    skipBookingFlowStaffSelection: s.optionalNullable(s.boolean()),
    _keysMap: {
      locationTypes: "location_types",
      alignmentTime: "alignment_time",
      minBookingLeadTimeSeconds: "min_booking_lead_time_seconds",
      maxBookingLeadTimeSeconds: "max_booking_lead_time_seconds",
      anyTeamMemberBookingEnabled: "any_team_member_booking_enabled",
      multipleServiceBookingEnabled: "multiple_service_booking_enabled",
      maxAppointmentsPerDayLimitType: "max_appointments_per_day_limit_type",
      maxAppointmentsPerDayLimit: "max_appointments_per_day_limit",
      cancellationWindowSeconds: "cancellation_window_seconds",
      cancellationFeeMoney: "cancellation_fee_money",
      cancellationPolicy: "cancellation_policy",
      cancellationPolicyText: "cancellation_policy_text",
      skipBookingFlowStaffSelection: "skip_booking_flow_staff_selection",
    },
  });
