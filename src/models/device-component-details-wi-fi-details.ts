import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  deviceComponentDetailsMeasurementSchema,
  type DeviceComponentDetailsMeasurement,
} from "./device-component-details-measurement.js";

export type DeviceComponentDetailsWiFiDetails = {
  /** A boolean to represent whether the WiFI interface is currently active. */
  active?: boolean | null;
  /** The name of the connected WIFI network. */
  ssid?: string | null;
  /** The string representation of the device’s IPv4 address. */
  ipAddressV4?: string | null;
  /**
   * The security protocol for a secure connection (e.g. WPA2). None provided if the connection is
   * unsecured.
   */
  secureConnection?: string | null;
  /** A value qualified by unit of measure. */
  signalStrength?: DeviceComponentDetailsMeasurement;
  /** The mac address of the device in this network. */
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
