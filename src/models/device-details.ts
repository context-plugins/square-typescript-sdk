import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details about the device that took the payment. */
export type DeviceDetails = {
  /** The Square-issued ID of the device. */
  deviceId?: string | null;
  /** The Square-issued installation ID for the device. */
  deviceInstallationId?: string | null;
  /** The name of the device set by the seller. */
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
