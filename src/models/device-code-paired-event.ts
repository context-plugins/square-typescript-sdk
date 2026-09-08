import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  deviceCodePairedEventDataSchema,
  type DeviceCodePairedEventData,
} from "./device-code-paired-event-data.js";

/**
 * Published when a Square Terminal has been paired with a Terminal API client and the device_id of
 * the paired Square Terminal is available.
 */
export type DeviceCodePairedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The ID of the target location associated with the event. */
  locationId?: string | null;
  /** The type of event this represents, `"device.code.paired"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** RFC 3339 timestamp of when the event was created. */
  createdAt?: string;
  data?: DeviceCodePairedEventData;
};

export const deviceCodePairedEventSchema: Schema<DeviceCodePairedEvent> = s.object<DeviceCodePairedEvent>({
  merchantId: s.optionalNullable(s.string()),
  locationId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => deviceCodePairedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    locationId: "location_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
