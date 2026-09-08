import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DeviceStatusCategory = {
  Available: "AVAILABLE",
  NeedsAttention: "NEEDS_ATTENTION",
  Offline: "OFFLINE",
} as const;
export type DeviceStatusCategory =
  | (typeof DeviceStatusCategory)[keyof typeof DeviceStatusCategory]
  | (string & {});

export const deviceStatusCategorySchema: EnumSchema<DeviceStatusCategory> =
  s.enumOf<DeviceStatusCategory>(DeviceStatusCategory);
