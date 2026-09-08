import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceMetadata = {
  /** The Terminal’s remaining battery percentage, between 1-100. */
  batteryPercentage?: string | null;
  /** The current charging state of the Terminal. Options: `CHARGING`, `NOT_CHARGING` */
  chargingState?: string | null;
  /** The ID of the Square seller business location associated with the Terminal. */
  locationId?: string | null;
  /** The ID of the Square merchant account that is currently signed-in to the Terminal. */
  merchantId?: string | null;
  /** The Terminal’s current network connection type. Options: `WIFI`, `ETHERNET` */
  networkConnectionType?: string | null;
  /** The country in which the Terminal is authorized to take payments. */
  paymentRegion?: string | null;
  /**
   * The unique identifier assigned to the Terminal, which can be found on the lower back of the
   * device.
   */
  serialNumber?: string | null;
  /** The current version of the Terminal’s operating system. */
  osVersion?: string | null;
  /** The current version of the application running on the Terminal. */
  appVersion?: string | null;
  /** The name of the Wi-Fi network to which the Terminal is connected. */
  wifiNetworkName?: string | null;
  /**
   * The signal strength of the Wi-FI network connection. Options: `POOR`, `FAIR`, `GOOD`,
   * `EXCELLENT`
   */
  wifiNetworkStrength?: string | null;
  /** The IP address of the Terminal. */
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
