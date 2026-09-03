import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  deviceCreatedEventObjectSchema,
  type DeviceCreatedEventObject,
} from "./device-created-event-object.js";

export type DeviceCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: DeviceCreatedEventObject;
};

export const deviceCreatedEventDataSchema: Schema<DeviceCreatedEventData> = s.object<DeviceCreatedEventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  object: s.optional(s.lazy(() => deviceCreatedEventObjectSchema)),
});
