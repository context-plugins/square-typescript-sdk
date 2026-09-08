import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  businessAppointmentSettingsSchema,
  type BusinessAppointmentSettings,
} from "./business-appointment-settings.js";
import {
  businessBookingProfileBookingPolicySchema,
  type BusinessBookingProfileBookingPolicy,
} from "./business-booking-profile-booking-policy.js";
import {
  businessBookingProfileCustomerTimezoneChoiceSchema,
  type BusinessBookingProfileCustomerTimezoneChoice,
} from "./business-booking-profile-customer-timezone-choice.js";

/** A seller's business booking profile, including booking policy, appointment settings, etc. */
export type BusinessBookingProfile = {
  /** The ID of the seller, obtainable using the Merchants API. */
  sellerId?: string | null;
  /** The RFC 3339 timestamp specifying the booking's creation time. */
  createdAt?: string;
  /** Indicates whether the seller is open for booking. */
  bookingEnabled?: boolean | null;
  /** Choices of customer-facing time zone used for bookings. */
  customerTimezoneChoice?: BusinessBookingProfileCustomerTimezoneChoice;
  /** Policies for accepting bookings. */
  bookingPolicy?: BusinessBookingProfileBookingPolicy;
  /**
   * Indicates whether customers can cancel or reschedule their own bookings (`true`) or not
   * (`false`).
   */
  allowUserCancel?: boolean | null;
  /** The service appointment settings, including where and how the service is provided. */
  businessAppointmentSettings?: BusinessAppointmentSettings;
  /**
   * Indicates whether the seller's subscription to Square Appointments supports creating, updating
   * or canceling an appointment through the API (`true`) or not (`false`) using seller permission.
   */
  supportSellerLevelWrites?: boolean | null;
};

export const businessBookingProfileSchema: Schema<BusinessBookingProfile> = s.object<BusinessBookingProfile>({
  sellerId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  bookingEnabled: s.optionalNullable(s.boolean()),
  customerTimezoneChoice: s.optional(s.lazy(() => businessBookingProfileCustomerTimezoneChoiceSchema)),
  bookingPolicy: s.optional(s.lazy(() => businessBookingProfileBookingPolicySchema)),
  allowUserCancel: s.optionalNullable(s.boolean()),
  businessAppointmentSettings: s.optional(s.lazy(() => businessAppointmentSettingsSchema)),
  supportSellerLevelWrites: s.optionalNullable(s.boolean()),
  _keysMap: {
    sellerId: "seller_id",
    createdAt: "created_at",
    bookingEnabled: "booking_enabled",
    customerTimezoneChoice: "customer_timezone_choice",
    bookingPolicy: "booking_policy",
    allowUserCancel: "allow_user_cancel",
    businessAppointmentSettings: "business_appointment_settings",
    supportSellerLevelWrites: "support_seller_level_writes",
  },
});
