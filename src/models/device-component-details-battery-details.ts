import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  deviceComponentDetailsExternalPowerSchema,
  type DeviceComponentDetailsExternalPower,
} from "./device-component-details-external-power.js";

export type DeviceComponentDetailsBatteryDetails = {
  visiblePercent?: number | null;
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
