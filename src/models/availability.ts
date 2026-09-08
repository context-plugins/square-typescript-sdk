import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { appointmentSegmentSchema, type AppointmentSegment } from "./appointment-segment.js";

/**
 * Defines an appointment slot that encapsulates the appointment segments, location and starting
 * time available for booking.
 */
export type Availability = {
  /** The RFC 3339 timestamp specifying the beginning time of the slot available for booking. */
  startAt?: string | null;
  /** The ID of the location available for booking. */
  locationId?: string;
  /** The list of appointment segments available for booking */
  appointmentSegments?: AppointmentSegment[] | null;
};

export const availabilitySchema: Schema<Availability> = s.object<Availability>({
  startAt: s.optionalNullable(s.string()),
  locationId: s.optional(s.string()),
  appointmentSegments: s.optionalNullable(s.array(s.lazy(() => appointmentSegmentSchema))),
  _keysMap: {
    startAt: "start_at",
    locationId: "location_id",
    appointmentSegments: "appointment_segments",
  },
});
