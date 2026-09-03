import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceCodeSchema, type DeviceCode } from "./device-code.js";

export type DeviceCodePairedEventObject = {
  deviceCode?: DeviceCode;
};

export const deviceCodePairedEventObjectSchema: Schema<DeviceCodePairedEventObject> =
  s.object<DeviceCodePairedEventObject>({
    deviceCode: s.optional(s.lazy(() => deviceCodeSchema)),
    _keysMap: {
      deviceCode: "device_code",
    },
  });
