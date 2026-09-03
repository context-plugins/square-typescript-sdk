import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceComponentDetailsEthernetDetails = {
  active?: boolean | null;
  ipAddressV4?: string | null;
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
