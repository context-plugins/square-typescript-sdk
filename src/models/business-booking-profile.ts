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

export type BusinessBookingProfile = {
  sellerId?: string | null;
  createdAt?: string;
  bookingEnabled?: boolean | null;
  customerTimezoneChoice?: BusinessBookingProfileCustomerTimezoneChoice;
  bookingPolicy?: BusinessBookingProfileBookingPolicy;
  allowUserCancel?: boolean | null;
  businessAppointmentSettings?: BusinessAppointmentSettings;
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
