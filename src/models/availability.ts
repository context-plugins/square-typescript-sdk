import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { appointmentSegmentSchema, type AppointmentSegment } from "./appointment-segment.js";

export type Availability = {
  startAt?: string | null;
  locationId?: string;
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
