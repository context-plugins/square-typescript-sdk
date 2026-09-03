import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DeviceCodeStatus = {
  Unknown: "UNKNOWN",
  Unpaired: "UNPAIRED",
  Paired: "PAIRED",
  Expired: "EXPIRED",
} as const;
export type DeviceCodeStatus = (typeof DeviceCodeStatus)[keyof typeof DeviceCodeStatus] | (string & {});

export const deviceCodeStatusSchema: EnumSchema<DeviceCodeStatus> =
  s.enumOf<DeviceCodeStatus>(DeviceCodeStatus);
