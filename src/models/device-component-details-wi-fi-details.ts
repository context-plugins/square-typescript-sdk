import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  deviceComponentDetailsMeasurementSchema,
  type DeviceComponentDetailsMeasurement,
} from "./device-component-details-measurement.js";

export type DeviceComponentDetailsWiFiDetails = {
  active?: boolean | null;
  ssid?: string | null;
  ipAddressV4?: string | null;
  secureConnection?: string | null;
  signalStrength?: DeviceComponentDetailsMeasurement;
  macAddress?: string | null;
};

export const deviceComponentDetailsWiFiDetailsSchema: Schema<DeviceComponentDetailsWiFiDetails> =
  s.object<DeviceComponentDetailsWiFiDetails>({
    active: s.optionalNullable(s.boolean()),
    ssid: s.optionalNullable(s.string()),
    ipAddressV4: s.optionalNullable(s.string()),
    secureConnection: s.optionalNullable(s.string()),
    signalStrength: s.optional(s.lazy(() => deviceComponentDetailsMeasurementSchema)),
    macAddress: s.optionalNullable(s.string()),
    _keysMap: {
      ipAddressV4: "ip_address_v4",
      secureConnection: "secure_connection",
      signalStrength: "signal_strength",
      macAddress: "mac_address",
    },
  });
