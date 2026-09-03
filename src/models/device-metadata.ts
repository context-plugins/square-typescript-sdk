import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceMetadata = {
  batteryPercentage?: string | null;
  chargingState?: string | null;
  locationId?: string | null;
  merchantId?: string | null;
  networkConnectionType?: string | null;
  paymentRegion?: string | null;
  serialNumber?: string | null;
  osVersion?: string | null;
  appVersion?: string | null;
  wifiNetworkName?: string | null;
  wifiNetworkStrength?: string | null;
  ipAddress?: string | null;
};

export const deviceMetadataSchema: Schema<DeviceMetadata> = s.object<DeviceMetadata>({
  batteryPercentage: s.optionalNullable(s.string()),
  chargingState: s.optionalNullable(s.string()),
  locationId: s.optionalNullable(s.string()),
  merchantId: s.optionalNullable(s.string()),
  networkConnectionType: s.optionalNullable(s.string()),
  paymentRegion: s.optionalNullable(s.string()),
  serialNumber: s.optionalNullable(s.string()),
  osVersion: s.optionalNullable(s.string()),
  appVersion: s.optionalNullable(s.string()),
  wifiNetworkName: s.optionalNullable(s.string()),
  wifiNetworkStrength: s.optionalNullable(s.string()),
  ipAddress: s.optionalNullable(s.string()),
  _keysMap: {
    batteryPercentage: "battery_percentage",
    chargingState: "charging_state",
    locationId: "location_id",
    merchantId: "merchant_id",
    networkConnectionType: "network_connection_type",
    paymentRegion: "payment_region",
    serialNumber: "serial_number",
    osVersion: "os_version",
    appVersion: "app_version",
    wifiNetworkName: "wifi_network_name",
    wifiNetworkStrength: "wifi_network_strength",
    ipAddress: "ip_address",
  },
});
