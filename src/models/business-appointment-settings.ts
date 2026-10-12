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

/** The service appointment settings, including where and how the service is provided. */
export type BusinessAppointmentSettings = {
  /**
   * Types of the location allowed for bookings. See
   * [BusinessAppointmentSettingsBookingLocationType](#type-businessappointmentsettingsbookinglocationtype)
   * for possible values
   */
  locationTypes?: BusinessAppointmentSettingsBookingLocationType[] | null;
  /** Time units of a service duration for bookings. */
  alignmentTime?: BusinessAppointmentSettingsAlignmentTime;
  /**
   * The minimum lead time in seconds before a service can be booked. A booking must be created at
   * least this amount of time before its starting time.
   */
  minBookingLeadTimeSeconds?: number | null;
  /**
   * The maximum lead time in seconds before a service can be booked. A booking must be created at
   * most this amount of time before its starting time.
   */
  maxBookingLeadTimeSeconds?: number | null;
  /**
   * Indicates whether a customer can choose from all available time slots and have a staff member
   * assigned automatically (`true`) or not (`false`).
   */
  anyTeamMemberBookingEnabled?: boolean | null;
  /** Indicates whether a customer can book multiple services in a single online booking. */
  multipleServiceBookingEnabled?: boolean | null;
  /** Types of daily appointment limits. */
  maxAppointmentsPerDayLimitType?: BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType;
  /** The maximum number of daily appointments per team member or per location. */
  maxAppointmentsPerDayLimit?: number | null;
  /** The cut-off time in seconds for allowing clients to cancel or reschedule an appointment. */
  cancellationWindowSeconds?: number | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  cancellationFeeMoney?: Money;
  /** The category of the seller’s cancellation policy. */
  cancellationPolicy?: BusinessAppointmentSettingsCancellationPolicy;
  /** The free-form text of the seller's cancellation policy. */
  cancellationPolicyText?: string | null;
  /**
   * Indicates whether customers has an assigned staff member (`true`) or can select s staff member
   * of their choice (`false`).
   */
  skipBookingFlowStaffSelection?: boolean | null;
};

export const businessAppointmentSettingsSchema: Schema<BusinessAppointmentSettings> =
  s.object<BusinessAppointmentSettings>({
    locationTypes: s.optionalNullable(
      s.array(s.lazy(() => businessAppointmentSettingsBookingLocationTypeSchema)),
    ),
    alignmentTime: s.optional(s.lazy(() => businessAppointmentSettingsAlignmentTimeSchema)),
    minBookingLeadTimeSeconds: s.optionalNullable(s.int()),
    maxBookingLeadTimeSeconds: s.optionalNullable(s.int()),
    anyTeamMemberBookingEnabled: s.optionalNullable(s.boolean()),
    multipleServiceBookingEnabled: s.optionalNullable(s.boolean()),
    maxAppointmentsPerDayLimitType: s.optional(
      s.lazy(() => businessAppointmentSettingsMaxAppointmentsPerDayLimitTypeSchema),
    ),
    maxAppointmentsPerDayLimit: s.optionalNullable(s.int()),
    cancellationWindowSeconds: s.optionalNullable(s.int()),
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
