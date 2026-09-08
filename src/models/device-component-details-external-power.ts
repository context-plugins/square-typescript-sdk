import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** An enum for ExternalPower. */
export const DeviceComponentDetailsExternalPower = {
  /** Plugged in and charging. */
  AvailableCharging: "AVAILABLE_CHARGING",
  /** Fully charged. */
  AvailableNotInUse: "AVAILABLE_NOT_IN_USE",
  /** On battery power. */
  Unavailable: "UNAVAILABLE",
  /** Not providing enough power for the device. */
  AvailableInsufficient: "AVAILABLE_INSUFFICIENT",
} as const;
export type DeviceComponentDetailsExternalPower =
  | (typeof DeviceComponentDetailsExternalPower)[keyof typeof DeviceComponentDetailsExternalPower]
  | (string & {});

export const deviceComponentDetailsExternalPowerSchema: EnumSchema<DeviceComponentDetailsExternalPower> =
  s.enumOf<DeviceComponentDetailsExternalPower>(DeviceComponentDetailsExternalPower);
