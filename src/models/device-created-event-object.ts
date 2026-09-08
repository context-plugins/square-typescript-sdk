import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceSchema, type Device } from "./device.js";

export type DeviceCreatedEventObject = {
  device?: Device;
};

export const deviceCreatedEventObjectSchema: Schema<DeviceCreatedEventObject> =
  s.object<DeviceCreatedEventObject>({
    device: s.optional(s.lazy(() => deviceSchema)),
  });
