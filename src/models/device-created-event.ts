import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceCreatedEventDataSchema, type DeviceCreatedEventData } from "./device-created-event-data.js";

/** Published when a Device is created. */
export type DeviceCreatedEvent = {
  /** The merchant the newly created device belongs to. */
  merchantId?: string | null;
  /** The type of event this represents. The value is `"device.created"`. */
  type?: string | null;
  /** A UUID that uniquely identifies this device creation event. */
  eventId?: string | null;
  /** The time when the device creation event was first created, in RFC 3339 format. */
  createdAt?: string;
  data?: DeviceCreatedEventData;
};

export const deviceCreatedEventSchema: Schema<DeviceCreatedEvent> = s.object<DeviceCreatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => deviceCreatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
