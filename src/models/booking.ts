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

/**
 * Represents a booking as a time-bound service contract for a seller's staff member to provide a
 * specified service at a given location to a requesting customer in one or more appointment
 * segments.
 */
export type Booking = {
  /** A unique ID of this object representing a booking. */
  id?: string;
  /** The revision number for the booking used for optimistic concurrency. */
  version?: number;
  /** Supported booking statuses. */
  status?: BookingStatus;
  /** The RFC 3339 timestamp specifying the creation time of this booking. */
  createdAt?: string;
  /** The RFC 3339 timestamp specifying the most recent update time of this booking. */
  updatedAt?: string;
  /** The RFC 3339 timestamp specifying the starting time of this booking. */
  startAt?: string | null;
  /**
   * The ID of the [Location](entity:Location) object representing the location where the booked
   * service is provided. Once set when the booking is created, its value cannot be changed.
   */
  locationId?: string | null;
  /**
   * The ID of the [Customer](entity:Customer) object representing the customer receiving the booked
   * service.
   */
  customerId?: string | null;
  /**
   * The free-text field for the customer to supply notes about the booking. For example, the note
   * can be preferences that cannot be expressed by supported attributes of a relevant
   * [CatalogObject](entity:CatalogObject) instance.
   */
  customerNote?: string | null;
  /**
   * The free-text field for the seller to supply notes about the booking. For example, the note can
   * be preferences that cannot be expressed by supported attributes of a specific
   * [CatalogObject](entity:CatalogObject) instance. This field should not be visible to customers.
   */
  sellerNote?: string | null;
  /** A list of appointment segments for this booking. */
  appointmentSegments?: AppointmentSegment[] | null;
  /**
   * Additional time at the end of a booking. Applications should not make this field visible to
   * customers of a seller.
   */
  transitionTimeMinutes?: number;
  /** Whether the booking is of a full business day. */
  allDay?: boolean;
  /** Supported types of location where service is provided. */
  locationType?: BusinessAppointmentSettingsBookingLocationType;
  /** Information about a booking creator. */
  creatorDetails?: BookingCreatorDetails;
  /** Supported sources a booking was created from. */
  source?: BookingBookingSource;
  /**
   * Represents a postal address in a country. For more information, see [Working with
   * Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
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
