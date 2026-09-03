import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { appointmentSegmentSchema, type AppointmentSegment } from "./appointment-segment.js";
import { bookingBookingSourceSchema, type BookingBookingSource } from "./booking-booking-source.js";
import { bookingCreatorDetailsSchema, type BookingCreatorDetails } from "./booking-creator-details.js";
import { bookingStatusSchema, type BookingStatus } from "./booking-status.js";
import {
  businessAppointmentSettingsBookingLocationTypeSchema,
  type BusinessAppointmentSettingsBookingLocationType,
} from "./business-appointment-settings-booking-location-type.js";

export type Booking = {
  id?: string;
  version?: number;
  status?: BookingStatus;
  createdAt?: string;
  updatedAt?: string;
  startAt?: string | null;
  locationId?: string | null;
  customerId?: string | null;
  customerNote?: string | null;
  sellerNote?: string | null;
  appointmentSegments?: AppointmentSegment[] | null;
  transitionTimeMinutes?: number;
  allDay?: boolean;
  locationType?: BusinessAppointmentSettingsBookingLocationType;
  creatorDetails?: BookingCreatorDetails;
  source?: BookingBookingSource;
  address?: Address;
};

export const bookingSchema: Schema<Booking> = s.object<Booking>({
  id: s.optional(s.string()),
  version: s.optional(s.number()),
  status: s.optional(s.lazy(() => bookingStatusSchema)),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  startAt: s.optionalNullable(s.string()),
  locationId: s.optionalNullable(s.string()),
  customerId: s.optionalNullable(s.string()),
  customerNote: s.optionalNullable(s.string()),
  sellerNote: s.optionalNullable(s.string()),
  appointmentSegments: s.optionalNullable(s.array(s.lazy(() => appointmentSegmentSchema))),
  transitionTimeMinutes: s.optional(s.number()),
  allDay: s.optional(s.boolean()),
  locationType: s.optional(s.lazy(() => businessAppointmentSettingsBookingLocationTypeSchema)),
  creatorDetails: s.optional(s.lazy(() => bookingCreatorDetailsSchema)),
  source: s.optional(s.lazy(() => bookingBookingSourceSchema)),
  address: s.optional(s.lazy(() => addressSchema)),
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
    startAt: "start_at",
    locationId: "location_id",
    customerId: "customer_id",
    customerNote: "customer_note",
    sellerNote: "seller_note",
    appointmentSegments: "appointment_segments",
    transitionTimeMinutes: "transition_time_minutes",
    allDay: "all_day",
    locationType: "location_type",
    creatorDetails: "creator_details",
  },
});
