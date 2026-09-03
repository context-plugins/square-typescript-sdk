import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DeviceAttributesDeviceType = {
  Terminal: "TERMINAL",
  Handheld: "HANDHELD",
} as const;
export type DeviceAttributesDeviceType =
  | (typeof DeviceAttributesDeviceType)[keyof typeof DeviceAttributesDeviceType]
  | (string & {});

export const deviceAttributesDeviceTypeSchema: EnumSchema<DeviceAttributesDeviceType> =
  s.enumOf<DeviceAttributesDeviceType>(DeviceAttributesDeviceType);
