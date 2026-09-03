import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceDetails = {
  deviceId?: string | null;
  deviceInstallationId?: string | null;
  deviceName?: string | null;
};

export const deviceDetailsSchema: Schema<DeviceDetails> = s.object<DeviceDetails>({
  deviceId: s.optionalNullable(s.string()),
  deviceInstallationId: s.optionalNullable(s.string()),
  deviceName: s.optionalNullable(s.string()),
  _keysMap: {
    deviceId: "device_id",
    deviceInstallationId: "device_installation_id",
    deviceName: "device_name",
  },
});
