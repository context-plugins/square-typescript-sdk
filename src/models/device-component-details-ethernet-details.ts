import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceComponentDetailsEthernetDetails = {
  /** A boolean to represent whether the Ethernet interface is currently active. */
  active?: boolean | null;
  /** The string representation of the device’s IPv4 address. */
  ipAddressV4?: string | null;
  /** The mac address of the device in this network. */
  macAddress?: string | null;
};

export const deviceComponentDetailsEthernetDetailsSchema: Schema<DeviceComponentDetailsEthernetDetails> =
  s.object<DeviceComponentDetailsEthernetDetails>({
    active: s.optionalNullable(s.boolean()),
    ipAddressV4: s.optionalNullable(s.string()),
    macAddress: s.optionalNullable(s.string()),
    _keysMap: {
      ipAddressV4: "ip_address_v4",
      macAddress: "mac_address",
    },
  });
