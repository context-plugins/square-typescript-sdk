import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  deviceComponentDetailsExternalPowerSchema,
  type DeviceComponentDetailsExternalPower,
} from "./device-component-details-external-power.js";

export type DeviceComponentDetailsBatteryDetails = {
  /** The battery charge percentage as displayed on the device. */
  visiblePercent?: number | null;
  /** An enum for ExternalPower. */
  externalPower?: DeviceComponentDetailsExternalPower;
};

export const deviceComponentDetailsBatteryDetailsSchema: Schema<DeviceComponentDetailsBatteryDetails> =
  s.object<DeviceComponentDetailsBatteryDetails>({
    visiblePercent: s.optionalNullable(s.number()),
    externalPower: s.optional(s.lazy(() => deviceComponentDetailsExternalPowerSchema)),
    _keysMap: {
      visiblePercent: "visible_percent",
      externalPower: "external_power",
    },
  });
