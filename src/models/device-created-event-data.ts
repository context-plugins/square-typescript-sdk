import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  deviceCreatedEventObjectSchema,
  type DeviceCreatedEventObject,
} from "./device-created-event-object.js";

export type DeviceCreatedEventData = {
  /** The type of the event data object. The value is `"device"`. */
  type?: string | null;
  /** The ID of the device. */
  id?: string;
  object?: DeviceCreatedEventObject;
};

export const deviceCreatedEventDataSchema: Schema<DeviceCreatedEventData> = s.object<DeviceCreatedEventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  object: s.optional(s.lazy(() => deviceCreatedEventObjectSchema)),
});
