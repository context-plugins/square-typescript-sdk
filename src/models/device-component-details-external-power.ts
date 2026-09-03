import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DeviceComponentDetailsExternalPower = {
  AvailableCharging: "AVAILABLE_CHARGING",
  AvailableNotInUse: "AVAILABLE_NOT_IN_USE",
  Unavailable: "UNAVAILABLE",
  AvailableInsufficient: "AVAILABLE_INSUFFICIENT",
} as const;
export type DeviceComponentDetailsExternalPower =
  | (typeof DeviceComponentDetailsExternalPower)[keyof typeof DeviceComponentDetailsExternalPower]
  | (string & {});

export const deviceComponentDetailsExternalPowerSchema: EnumSchema<DeviceComponentDetailsExternalPower> =
  s.enumOf<DeviceComponentDetailsExternalPower>(DeviceComponentDetailsExternalPower);
